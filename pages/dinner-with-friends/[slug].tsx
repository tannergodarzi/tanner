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

	const { Title, Summary, frontmatter } = newQueryResponse.content.properties;
	const pageTitle = Title["title"][0].plain_text;
	const pageDescription = Summary["rich_text"][0].plain_text;
	return {
		props: {
			...newQueryResponse.content.properties,
			//Photos: newQueryResponse.frontmatter["Photos"],
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
	const { blocks, Photos, pageTitle, pageDescription, frontmatter } = props;
	const [aspectRatio, setAspectRatio] = React.useState("1 / 1");
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
					{Photos.files.map((file) => {
						return (
							<Image
								src={`/api/notion-asset/block/${file.file.url}/file?last_edited_time=${file.file.expiry_time}`}
								alt={""}
								width={200}
								height={200}
								loading="eager"
								quality={75}
								onLoad={(event: React.SyntheticEvent) => {
									const { naturalWidth, naturalHeight } = event.target as HTMLImageElement;
									setAspectRatio(`${naturalWidth} / ${naturalHeight}`);
								}}
								key={file.name}
							/>
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
