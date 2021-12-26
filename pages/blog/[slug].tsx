import Head from "next/head";
import { Client } from "@notionhq/client";
import { Block } from "../../components/block";

import styles from "./slug.module.css";
import { PostData } from "../../helpers/notionTypes";

// Notion client
const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export async function getServerSideProps(context) {
	const queryResponse = await notion
		.search({
			query: context.params.slug,
		})
		.then((response) => response.results);
	// TODO: Handle query not returning anything
	const id = queryResponse[0].id;

	const pageResponse = await notion.pages.retrieve({ page_id: id }).then((response) => response as PostData);
	const blocksResponse = await notion.blocks.children
		.list({
			block_id: id,
		})
		.then((response) => response.results);

	const { created_time, last_edited_time, properties, cover, icon } = pageResponse;
	// TODO: Handle archived state as 404 or permanently deleted

	const pageTitle = properties.title.title[0].plain_text;
	const blocks = blocksResponse;
	const meta = { created_time, last_edited_time, cover, icon };
	return {
		props: {
			meta,
			pageTitle,
			blocks,
		},
	};
}

export default function Slug(props) {
	const { blocks, meta, pageTitle } = props;
	return (
		<>
			<Head>
				<title>Blog | {pageTitle}</title>
				<meta charSet="UTF-8" />
				<meta name="title" content={`Blog | ${pageTitle}`} />
				<meta
					name="description"
					content="a Front End Engineer living in San Francisco. I&rsquo;m
						currently at Notion telling the story of toolmaking for the
						future."
				/>
				<meta name="keywords" content="Tanner Godarzi, Tanner, Notion, Dropbox, black ops" />
				<meta name="author" content="Tanner Godarzi" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://use.typekit.net/wir7xtg.css" />
			</Head>

			<main>
				<article className={styles.article}>
					<header className={styles.header}>
						<h1>{pageTitle}</h1>
						<time dateTime={meta.created_time}>
							{`Published ${new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
								new Date(meta.created_time)
							)}`}
						</time>
					</header>
					<section>
						{blocks.map((block) => {
							return <Block block={block} key={block.id} />;
						})}
					</section>
				</article>
			</main>
		</>
	);
}
