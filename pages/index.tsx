import Head from "next/head";
import Image from "next/image";
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
				<section className="grid">
					<picture>
						<Image
							src={"/The-Good-the-Bad-and-the-Ugly-clint-eastwood-41428448-744-999.jpg"}
							layout="fill"
						/>
					</picture>
					<aside>
						<h2>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}</h2>
						<p>
							{
								"Integer consectetur blandit feugiat. Suspendisse in sem viverra, tempus enim vel, rhoncus mauris. Morbi eu finibus nunc, at malesuada odio. Aenean lorem lectus, venenatis eu tellus sit amet, rutrum pretium velit. Morbi finibus convallis interdum."
							}
						</p>
					</aside>
				</section>
				<Footer />
			</main>
			<style jsx>{`
				picture {
					grid-column: 4 / span 4;
					grid-row: 2 / span 6;
					background: rgba(0, 0, 0, 0.1);
					position: relative;
					object-fit: cover;
				}
				aside {
					grid-column: 9 / span 6;
					grid-row: 2 / span 2;
				}
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
