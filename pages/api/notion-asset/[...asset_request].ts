import * as https from "https";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import send from "send";

import { parseAssetRequestQuery, ParsedAssetRequest } from "@jitl/notion-api";
import { assertDefined, unreachable } from "@jitl/util";

import { notion, NotionBlogPages } from "../../../library/notion";

const IMMUTABLE = "public, max-age=31536000, immutable";
const REVALIDATE = "public, s-maxage=59, stale-while-revalidate";

const getNotionAsset: NextApiHandler = async (req, res) => {
	const assetRequest = parseAssetRequestQuery(req.query as any);
	const isVercel = Boolean(
		process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.VERCEL_ANALYTICS_ID
	);
	const isCI = Boolean(process.env.CI);
	console.log("Asset request handler", assetRequest, "meta:", {
		isVercel,
		isCI,
	});
	if (isVercel && !isCI) {
		// On Vercel, filesystem is read-only.
		await getNotionAssetUsingNetwork(req, res, assetRequest);
	} else {
		await getNotionAssetUsingDisk(req, res, assetRequest);
	}
};

async function getNotionAssetUsingDisk(
	req: NextApiRequest,
	res: NextApiResponse,
	parsedAssetRequest: ParsedAssetRequest
) {
	const { assetRequest } = parsedAssetRequest;
	const { assets } = { ...NotionBlogPages };
	assertDefined(assets);

	const relativePath = await assets.downloadAssetRequest({
		request: assetRequest,
		cache: NotionBlogPages.notionObjects,
		notion,
	});

	if (!relativePath) {
		console.log("Not found:", assetRequest);
		res.writeHead(404, "Asset not found");
		res.end();
		return;
	}

	const stream = send(req, relativePath, {
		cacheControl: false,
		index: false,
		root: assets.config.directory,
	});

	res.setHeader("Cache-Control", getSuccessCacheControlHeader(parsedAssetRequest));

	return new Promise((resolve) => {
		stream.pipe(res).on("finish", resolve);
	});
}

async function getNotionAssetUsingNetwork(
	req: NextApiRequest,
	res: NextApiResponse,
	parsedAssetRequest: ParsedAssetRequest
) {
	const { assetRequest } = parsedAssetRequest;
	const { assets } = { ...NotionBlogPages, };
	assertDefined(assets);

	const asset = await assets.performAssetRequest({
		cache: NotionBlogPages.notionObjects,
		notion,
		request: assetRequest,
	});

	if (!asset) {
		console.log("Not found:", assetRequest);
		res.writeHead(404, "Asset not found").end();
		return;
	}

	let url: string | undefined;
	switch (asset.type) {
		case "emoji": {
			console.log("Cannot serve emoji:", asset);
			res.writeHead(404, "Emoji not found");
			res.end();
			return;
		}
		case "external":
			url = asset.external.url;
			break;
		case "file":
			url = asset.file.url;
			break;
		default:
			unreachable(asset);
	}

	return new Promise<void>((resolve, reject) => {
		if (!url) {
			console.log("URL somehow undefined:", asset);
			res.writeHead(404, "Asset not found");
			res.end();
			reject();
			return;
		}

		https.get(url, (getResponse) => {
			const proxyHeader = (header: string) => {
				const value = getResponse.headers[header] || getResponse.headers[header.toLowerCase()];
				if (value) {
					res.setHeader(header, value);
				}
			};

			proxyHeader("Content-Type");
			proxyHeader("Content-Length");

			if (getResponse.statusCode === 200) {
				res.setHeader("Cache-Control", getSuccessCacheControlHeader(parsedAssetRequest));
				res.writeHead(200, "OK");
			} else {
				res.status(getResponse.statusCode || 500);
			}

			getResponse
				.pipe(res)
				.on("end", () => {
					res.end();
					resolve();
				})
				.on("error", (err) => {
					console.log("Pipe error", err);
					res.writeHead(500, err.toString());
					res.end();
					reject(err);
				});
		});
	});
}

function getSuccessCacheControlHeader(assetRequest: ParsedAssetRequest) {
	if (assetRequest.last_edited_time) {
		return IMMUTABLE;
	} else {
		return REVALIDATE;
	}
}

export default getNotionAsset;
