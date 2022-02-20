import Head from "next/head";
import { Block } from "../components/block";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { checkForChildBlocks, getNotionPage, getNotionBlocks } from "../helpers/notionHelpers";

export async function getServerSideProps() {
	const page = await getNotionPage(process.env.NOTION_ABOUT_PAGE);
	const unparsedBlocks = await getNotionBlocks(page.id).then((a) => a.map(checkForChildBlocks));
	const blocks = await Promise.all([...unparsedBlocks]).then((values) => values);

	return {
		props: {
			blocks,
		},
	};
}

export default function About({ blocks }) {
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
				<section>
					{blocks.map((block) => {
						return <Block block={block} key={block.id} />;
					})}
				</section>
			</article>
			<Footer />
			<style global jsx>{`
				article {
					display: flex;
					flex-direction: column;
					flex-grow: 1;
					height: 100%;
					width: min(100%, 45rem);
					box-sizing: border-box;
					padding: 0 1.5rem;
					margin: 2rem auto 0;
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
