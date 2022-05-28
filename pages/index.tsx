import Head from "next/head";
import Grid from "../components/containers/grid";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navigation from "../components/navigation";
import { getNotionDatabase } from "../helpers/notionHelpers";

export async function getStaticProps() {
	const database = await getNotionDatabase({ page_size: 1 });
	return {
		props: {
			database,
		},
		revalidate: 60,
	};
}

export default function Index({ database }) {
	return (
		<>
			<Head>
				<title>Howdy, I&rsquo;m Tanner &mdash; a real person on the internet.</title>
				<meta name="title" content="Howdy, I’m Tanner — a real person on the internet" />
				<meta name="og:title" content="Howdy, I’m Tanner — a real person on the internet" />

				<meta
					name="description"
					content="I’m also a Front End Engineer motivated by design thinking and story telling. Currently I’m at Notion telling the story of tools for work."
				/>
				<meta
					name="og:description"
					content="I’m also a Front End Engineer motivated by design thinking and story telling. Currently I’m at Notion telling the story of tools for work."
				/>
			</Head>
			<Navigation />
			<Hero />
			<Footer />
		</>
	);
}
