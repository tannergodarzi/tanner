import Head from "next/head";
import { Client } from "@notionhq/client";
import { Block } from "../../components/block";
import { PostData } from "../../helpers/notionTypes";
import { Navigation } from "../../components/navigation";
import { sluggify } from "../../helpers/urlHelpers";
import { Footer } from "../../components/footer";
import { getEntryFromNotionDatabase, getNotionDatabase } from "../../helpers/notionHelpers";

// Notion client
const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export async function getStaticProps(context) {
	const queryResponse = (await getEntryFromNotionDatabase(context.params.slug)) as any;
	if (!queryResponse) {
		return {
			notFound: true,
		};
	}
	const blocksResponse = await notion.blocks.children
		.list({
			block_id: queryResponse.id,
		})
		.then((a) => a.results);
	const { Published, Name, Slug, Subtitle } = queryResponse.properties;
	const pageTitle = Name.title[0].plain_text;
	const blocks = blocksResponse;
	const meta = { Published, Name, Slug, Subtitle };
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
	const database = await getNotionDatabase();

	const paths = database
		.map((entry: any) => {
			return { params: { slug: sluggify(entry.properties.Slug.url) } };
		})
		.filter((a) => a !== undefined);

	// We'll pre-render only these paths at build time.
	// { fallback: blocking } will server-render pages
	// on-demand if the path doesn't exist.
	return { paths, fallback: "blocking" };
}

export default function Slug(props) {
	const { blocks, meta, pageTitle, Subtitle } = props;
	return (
		<>
			<Head>
				<title>{pageTitle} | Tanner&rsquo;s Blog</title>
				<meta name="title" content={pageTitle} />
				<meta name="description" content={Subtitle} />

				<meta name="og:title" content={pageTitle} />
				<meta name="og:description" content={Subtitle} />
				<meta name="og:author" content={"Tanner Godarzi"} />

				<meta name="twitter:title" content={pageTitle} />
				<meta name="twitter:description" content={Subtitle} />
				<meta name="twitter:author" content={"@tannergodarzi"} />
			</Head>

			<Navigation />
			<article>
				<header>
					<h1>{pageTitle}</h1>
					<time dateTime={meta.Published.date.start}>
						{`Published ${new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
							new Date(meta.Published.date.start)
						)}`}
					</time>
				</header>
				<section>
					{blocks.map((block) => {
						return <Block block={block} key={block.id} />;
					})}
				</section>
			</article>
			<Footer />

			<style jsx>{`
				article {
					flex-direction: column;
					width: min(100%, 45rem);
					box-sizing: border-box;
					padding: 0 1.5rem;
					margin: 4rem auto 0;
				}
				header {
					margin: 0 auto 2em;
					text-align: center;
					width: max(75%, 20rem);
				}
				header h1 {
					margin-bottom: 0.15em;
				}
			`}</style>
		</>
	);
}
