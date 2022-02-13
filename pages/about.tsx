import Head from "next/head";
import { Block } from "../components/block";
import { Grid } from "../components/containers/grid";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Navigation } from "../components/navigation";
import { getNotionPage, getNotionBlocks } from "../helpers/notionHelpers";

export async function getStaticProps() {
	const page = await getNotionPage(process.env.NOTION_ABOUT_PAGE);
	const blocks = await getNotionBlocks(page.id);
	const pageTitle = page.properties.title.title[0].plain_text;
	return {
		props: {
			blocks,
			pageTitle,
		},
		revalidate: 60,
	};
}

export default function About({ blocks, pageTitle }) {
	return (
		<>
			<Head>
				<title>Howdy, I&rsquo;m Tanner &mdash; a real person on the internet.</title>
				<meta name="title" content="Howdy, I’m Tanner — a real person on the internet" />
				<meta
					name="description"
					content="I’m also a Front End Engineer motivated by design thinking and story telling. Currently I’m at Notion on Brand Marketing telling the story of tools for work."
				/>
			</Head>
			<Navigation />
			<article>
				<header>
					<h1>{pageTitle}</h1>
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
