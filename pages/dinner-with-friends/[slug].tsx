import Head from "next/head";
import { Client } from "@notionhq/client";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { checkForChildBlocks } from "../../helpers/notionHelpers";
import { NotionDinnerWithFriendsPages } from "../../library/notion";
import Block from "../../components/block";
import React from "react";
import Image from "next/image";

import styles from "./slug.module.css";

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
	return (
		<>
			<Head>
				<title>{`Dinner With Friends | ${pageTitle}`}</title>
			</Head>
			<article className={styles.app}>
				<header>
					<h1>{pageTitle}</h1>
					<h2>{pageDescription}</h2>
				</header>
				<aside>
					<section className={styles.carousel}>
						{Photos.files.map((file) => {
							return (
								<Image
									src={file.file.url}
									alt={""}
									loading="eager"
									quality={75}
									onLoad={(event: React.SyntheticEvent) => {
										const { naturalWidth, naturalHeight } = event.target as HTMLImageElement;
										console.log(naturalWidth, naturalHeight);
										setAspectRatio(`${naturalWidth} / ${naturalHeight}`);
									}}
									style={{
										aspectRatio,
										display: "block",
										objectFit: "contain",
									}}
									width={300}
									height={300}
									key={file.file.name}
								/>
							);
						})}
					</section>
				</aside>
				<section>
					{blocks.map((block) => {
						return (
							<>
								<Block block={block} key={block.id} />
								<div style={{ height: "0.75em", display: "block" }} />
							</>
						);
					})}
				</section>
			</article>
		</>
	);
}
