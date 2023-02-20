import Head from "next/head";
import { Client } from "@notionhq/client";
import Block from "../../components/block";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { checkForChildBlocks } from "../../helpers/notionHelpers";
import { useRouter } from "next/router";
import { NotionDinnerWithFriendsPages } from "../../library/notion";

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

	const { Published, Name, Slug, Subtitle } = newQueryResponse.content.properties;
	const pageTitle = Name["title"][0].plain_text;
	const description = Subtitle["rich_text"][0].text.content;
	const meta = { Published, Name, Slug, description };
	return {
		props: {
			meta,
			pageTitle,
			description,
			blocks,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	const params: Array<{ params: { slug: string } }> = [];
	for await (const page of NotionDinnerWithFriendsPages.query({
		sorts: [NotionDinnerWithFriendsPages.sort.Published.descending],
	})) {
		await NotionDinnerWithFriendsPages.downloadAssets(page);
		params.push({
			params: {
				slug: page.frontmatter.slug,
			},
		});
	}
	return { paths: params, fallback: false };
}

export default function Slug(props) {
	const router = useRouter();
	const { pageTitle } = props;
	const canonicalUrl = typeof window === "undefined" ? "" : `${window.location.origin}${router.asPath}`;

	return (
		<>
			<Head>
				<title>Dinner With Friends | {pageTitle}</title>
				<meta name="title" content={pageTitle} />
				<link rel="canonical" href={canonicalUrl} />
			</Head>
			<Navigation />
			<Footer />
		</>
	);
}
