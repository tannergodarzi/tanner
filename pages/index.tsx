import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/footer";
import { GridElement } from "../components/gridElement";
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
					<GridElement column={3} columnSpan={5} row={2} rowSpan={6}>
						<Image
							src={"/tanner-foto.jpeg"}
							layout="fill"
							alt="A photo of Tanner Godarzi"
							objectFit="contain"
							objectPosition={"top center"}
						/>
					</GridElement>
					<GridElement column={9} columnSpan={6} row={2} rowSpan={4}>
						<article>
							<h2>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}</h2>
							<p>
								{
									"Integer consectetur blandit feugiat. Suspendisse in sem viverra, tempus enim vel, rhoncus mauris."
								}
							</p>
						</article>
					</GridElement>
					<GridElement column={11} columnSpan={4} row={6} rowSpan={4}>
						<iframe
							src="https://open.spotify.com/embed/playlist/4FuWTIt1AQQJcEeOKqEukk"
							width="100%"
							height="100%"
							frameBorder="0"
							allow="encrypted-media"
						></iframe>
					</GridElement>
					<GridElement column={2} columnSpan={5} row={9} rowSpan={7}>
						<Image
							src={"/NYC-2016-AIR-LAND-MATT_MURPHY-NOTE.jpg"}
							layout="fill"
							alt=""
							objectFit="contain"
						/>
					</GridElement>
					<GridElement column={8} columnSpan={8} row={11} rowSpan={6}>
						<picture className="frame">
							<Image
								src={"/photos/photo-01.jpg"}
								alt="A photo of the San Jacinto mountain range during sunrise"
								width={1200}
								height={794}
								objectFit="cover"
							/>
						</picture>
					</GridElement>
				</section>
				<Footer />
			</main>
			<style jsx>{`
				.grid {
					display: grid;
					grid-template-columns: repeat(16, calc(100vw / 16));
					grid-template-rows: repeat(32, calc(100vw / 16));
					gap: 0.5rem;
					grid-template-columns: repeat(16, minmax(calc(100vw / 16 - 0.5rem), calc(100vw / 16)));
					grid-template-rows: repeat(32, minmax(calc(100vw / 16 - 0.5rem), calc(100vw / 16)));
					width: 100vw;
				}
				.frame {
					border: 1px solid rgba(0, 0, 0, 0.1);
					padding: 0.75rem;
					background: var(--color-neutral);
					position: relative;
					display: flex;
					box-shadow: 2px 2px 15px -1px rgba(0, 0, 0, 0.25);
				}
			`}</style>
		</>
	);
}
