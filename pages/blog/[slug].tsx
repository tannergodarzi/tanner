import Head from "next/head";
import { Client } from "@notionhq/client";
import { Block } from "../../components/block";
import { PostData } from "../../helpers/notionTypes";
import { Navigation } from "../../components/navigation";
import { sluggify } from "../../helpers/urlHelpers";

// Notion client
const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export async function getStaticProps(context) {
	const queryResponse = await notion
		.search({
			query: context.params.slug,
		})
		.then((response) => response.results);
	if (queryResponse.length === 0) {
		return {
			notFound: true,
		};
	}
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
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	const pageContent = await notion.blocks.children.list({
		block_id: process.env.NOTION_BLOG_PAGE,
	});

	const paths = pageContent.results
		.map((block: any) => {
			if (block.child_page?.title && block.archived !== true) {
				return { params: { slug: sluggify(block.child_page.title) } };
			}
		})
		.filter((a) => a !== undefined);

	// We'll pre-render only these paths at build time.
	// { fallback: blocking } will server-render pages
	// on-demand if the path doesn't exist.
	return { paths, fallback: "blocking" };
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
				<Navigation />
				<article className={"article"}>
					<header className={"header"}>
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
			<style jsx>{`
				main {
					position: relative;
				}
				.article {
					flex-direction: column;
					width: min(100%, 1440px);
					box-sizing: border-box;
					padding: 0 1.5rem;
					margin: 4rem auto;
				}
				.header {
					margin: 0 auto 1rem;
					font-size: 0.75rem;
					text-align: center;
					width: max(75%, 320px);
				}
				.header time {
					line-height: 1em;
					font-family: monospace;
				}
				.header h1 {
					margin-bottom: 0.25rem;
				}
			`}</style>
		</>
	);
}
