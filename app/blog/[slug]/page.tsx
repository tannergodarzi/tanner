import Head from "next/head";
import Block from "../../../components/block";
import { checkForChildBlocks } from "../../../helpers/notionHelpers";
import { NotionBlogPages } from "../../../library/notion";

import styles from "./slug.module.css";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: { slug: string };
};

export default async function Slug({ params }) {
	const newQueryResponse = await NotionBlogPages.loadPageBySlug(params.slug as string);
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

	return (
		<article className={styles.article}>
			<header className={styles.header}>
				<h1>{pageTitle}</h1>
				<time dateTime={new Date(meta.Published.date.start).toUTCString()}>
					{`Published ${new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
						new Date(meta.Published.date.start)
					)}`}
				</time>
			</header>

			{blocks.map((block) => {
				return <Block block={block} key={block.id} />;
			})}
		</article>
	);
}

export async function generateStaticParams() {
	const params: Array<{ params: { slug: string } }> = [];
	for await (const page of NotionBlogPages.query({
		sorts: [NotionBlogPages.sort.Published.descending],
	})) {
		await NotionBlogPages.downloadAssets(page);
		params.push({
			params: {
				slug: page.frontmatter.slug,
			},
		});
	}
	return { paths: params };
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	const newQueryResponse = await NotionBlogPages.loadPageBySlug(params.slug as string);
	if (!newQueryResponse) {
		return {
		};
	}
	const unparsedBlocks = newQueryResponse.content.children.map(checkForChildBlocks);
	const blocks = await Promise.all([...unparsedBlocks]).then((values) => values);

	const { Published, Name, Slug, Subtitle } = newQueryResponse.content.properties;
	const pageTitle = Name["title"][0].plain_text;
	const description = Subtitle["rich_text"][0].text.content;
	const meta = { Published, Name, Slug, description };


	return {
		title: pageTitle,
		description,
		openGraph: {
			title: pageTitle,
			url: `http://tannergodarzi.com/blog/${params.slug}`,
			description,
		},
	};
}
