import Head from "next/head";
import { Grid } from "../components/containers/grid";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Navigation } from "../components/navigation";

export default function Index() {
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
			<Hero />
			{process.env.NODE_ENV === "development" && <Grid />}
			<Footer />
		</>
	);
}
