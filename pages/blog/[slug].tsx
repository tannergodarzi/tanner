import Head from "next/head";
import { Client } from "@notionhq/client";
import { Block } from "../../components/block";
import { Navigation } from "../../components/navigation";
import { Footer } from "../../components/footer";
import { getEntryFromNotionDatabase } from "../../helpers/notionHelpers";
import { useRouter } from "next/router";

// Notion client
const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export async function getServerSideProps(context) {
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
	const description = Subtitle.rich_text[0].plain_text;
	const meta = { Published, Name, Slug, description };
	return {
		props: {
			meta,
			pageTitle,
			description,
			blocks,
		},
	};
}

export default function Slug(props) {
	const router = useRouter();
	const { blocks, meta, pageTitle, description } = props;
	const canonicalUrl = typeof window === "undefined" ? "" : `${window.location.origin}${router.asPath}`;

	return (
		<>
			<Head>
				<title>Tanner&rsquo;s Blog | {pageTitle}</title>
				<meta name="title" content={pageTitle} />
				<meta name="description" content={description} />

				<meta name="og:site_name" content={`Tanner’s Blog`} />
				<meta name="og:title" content={pageTitle} />
				<meta name="og:description" content={description} />
				<meta name="og:author" content={"Tanner Godarzi"} />
				<meta
					name="og:image"
					content={"https://www.tannergodarzi.com/_next/image?url=%2Fnewspaper.jpg&w=1080&q=75"}
				/>

				<meta name="twitter:card" content={"summary_large_image"} />
				<meta name="twitter:title" content={`Tanner’s Blog | ${pageTitle}`} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:creator" content={"@tannergodarzi"} />
				<meta
					name="twitter:image"
					content={"https://www.tannergodarzi.com/_next/image?url=%2Fnewspaper.jpg&w=1080&q=75"}
				/>

				<link rel="canonical" href={canonicalUrl} />
				<script type="application/ld+json">
					{`
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						"mainEntityOfPage": {
							"@type": "WebPage",
							"@id": "https://www.tannergodarzi.com/blog"
						},
						"headline": ${pageTitle},
						"image": [
							"https://example.com/photos/1x1/photo.jpg",
							"https://example.com/photos/4x3/photo.jpg",
							"https://example.com/photos/16x9/photo.jpg"
						],
						"datePublished": ${new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
							new Date(meta.Published.date.start)
						)},
						"author": {
							"@type": "Person",
							"name": "Tanner Godarzi",
							"url": "https://www.tannergodarzi.com"
						},
						`}
				</script>
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
