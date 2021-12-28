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
							src={"https://via.placeholder.com/400x600"}
							layout="fill"
							width={400}
							height={600}
							alt=""
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
					<section className="music">
						<iframe
							src="https://open.spotify.com/embed/playlist/4FuWTIt1AQQJcEeOKqEukk"
							width="300"
							height="380"
							frameBorder="0"
							allow="encrypted-media"
						></iframe>
					</section>
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
					grid-row: 2 / span 4;
					overflow: hidden;
				}
				.music {
					grid-column: 12 / span 4;
					grid-row: 10 / span 5;
				}
				.music iframe {
				}
				.grid {
					display: grid;
					grid-template-columns: repeat(16, calc(100vw / 16));
					grid-template-rows: repeat(32, calc(100vw / 16));
					width: 100vw;
				}
			`}</style>
		</>
	);
}
