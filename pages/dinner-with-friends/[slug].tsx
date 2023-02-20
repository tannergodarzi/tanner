import Head from "next/head";
import { Client } from "@notionhq/client";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { checkForChildBlocks } from "../../helpers/notionHelpers";
import { useRouter } from "next/router";
import { NotionDinnerWithFriendsPages } from "../../library/notion";
import Text from "../../components/text";
import Block from "../../components/block";
import React from "react";
import Image from "next/image";

// Notion client
const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export async function getStaticProps(context) {
	const newQueryResponse = await NotionDinnerWithFriendsPages.loadPageBySlug(context.params.slug);
	if (!newQueryResponse) {
		return {
			notFound: true,
		};
	}
	const unparsedBlocks = newQueryResponse.content.children.map(checkForChildBlocks);
	const blocks = await Promise.all([...unparsedBlocks]).then((values) => values);

	const { Title, Summary } = newQueryResponse.content.properties;
	const pageTitle = Title["title"][0].plain_text;
	const pageDescription = Summary["rich_text"][0].plain_text;
	return {
		props: {
			...newQueryResponse.content.properties,
			pageTitle,
			pageDescription,
			blocks,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	const params: Array<{ params: { slug: string } }> = [{ params: { slug: "cory-and-trick-dog" } }];

	return { paths: params, fallback: false };
}

export default function Slug(props) {
	const { blocks, Photos, pageTitle, pageDescription } = props;
	const [aspectRatio, setAspectRatio] = React.useState("1 / 1");
	console.log(Photos);
	return (
		<>
			<Head>
				<title>Dinner With Friends | {pageTitle}</title>
			</Head>
			<Navigation />
			<article>
				<h1>{pageTitle}</h1>
				<h2>{pageDescription}</h2>
				<section>
					{Photos.files.map((image) => {
						console.log(image);
						return (
							<picture style={{ aspectRatio }} key={image.id}>
								{image.external?.url ? (
									/* eslint-disable @next/next/no-img-element */
									<img
										src={image.external?.url}
										alt={image.caption.length > 0 ? image.caption : ""}
										onLoad={(event: React.SyntheticEvent) => {
											const { naturalWidth, naturalHeight } = event.target as HTMLImageElement;
											setAspectRatio(`${naturalWidth} / ${naturalHeight}`);
										}}
									/>
								) : (
									<Image
										src={`/api/notion-asset/block/${image.name}/image`}
										alt={""}
										fill
										loading="eager"
										quality={75}
										onLoad={(event: React.SyntheticEvent) => {
											const { naturalWidth, naturalHeight } = event.target as HTMLImageElement;
											setAspectRatio(`${naturalWidth} / ${naturalHeight}`);
										}}
									/>
								)}
							</picture>
						);
					})}
				</section>
				{blocks.map((block) => {
					return <Block block={block} key={block.id} />;
				})}
			</article>
			<Footer />
		</>
	);
}
