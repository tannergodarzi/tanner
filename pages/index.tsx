import Head from "next/head";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Navigation } from "../components/navigation";

export default function Index() {
	return (
		<>
			<Head>
				<title>Hello, I&rsquo;m Tanner</title>
				<meta name="title" content="Hello, I'm Tanner" />
				<meta
					name="description"
					content="a Front End Engineer living in San Francisco. I&rsquo;m
						currently at Notion telling the story of toolmaking for the
						future."
				/>
				<meta name="keywords" content="Tanner Godarzi, Tanner, Notion, Dropbox, black ops" />
			</Head>

			<main>
				<Navigation />
				<Hero />
				<section className="grid"></section>
				<Footer />
			</main>
			<style jsx>{`
				.grid {
					display: grid;
					grid-template-columns: repeat(16, calc(100vw / 16));
					grid-template-rows: repeat(32, calc(100vw / 16));
					width: 100vw;
				}
				.hero {
					grid-column: 1 / span all;
					grid-row: 1 / span 4;
					background: rgba(255, 0, 0, 0.4);
				}
			`}</style>
		</>
	);
}
