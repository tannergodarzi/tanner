import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/footer";
import { GridElement } from "../components/gridElement";
import { Hero } from "../components/hero";
import { Navigation } from "../components/navigation";
import { getNotionBlocks } from "../helpers/notionHelpers";
import { sluggify } from "../helpers/urlHelpers";

export async function getStaticProps() {
	const posts = await getNotionBlocks();
	return {
		props: {
			posts,
		},
		revalidate: 60,
	};
}

export default function Index({ posts }) {
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
					<GridElement column={2} columnSpan={4} row={2} rowSpan={6}></GridElement>
					<GridElement column={6} columnSpan={6} row={2} rowSpan={4}>
						<article>
							<h2></h2>
							<p>
								{
									"Integer consectetur blandit feugiat. Suspendisse in sem viverra, tempus enim vel, rhoncus mauris."
								}
							</p>
							<Link href={"/about"}>
								<a>{"Read more"}</a>
							</Link>
						</article>
					</GridElement>
					<GridElement column={12} columnSpan={4} row={3} rowSpan={3}></GridElement>
					<GridElement column={11} columnSpan={5} row={8} rowSpan={6}>
						<iframe
							src="https://open.spotify.com/embed/playlist/4FuWTIt1AQQJcEeOKqEukk"
							width="100%"
							height="100%"
							frameBorder="0"
							allow="encrypted-media"
						></iframe>
					</GridElement>
					<GridElement column={2} columnSpan={5} row={9} rowSpan={6}>
						<Image
							src={"/NYC-2016-AIR-LAND-MATT_MURPHY-NOTE.jpg"}
							layout="fill"
							alt=""
							objectFit="contain"
							objectPosition={"top center"}
						/>
					</GridElement>

					<GridElement column={3} columnSpan={5} row={16} rowSpan={10}>
						<section className="entry">
							<span></span>
							<header>
								<h3>{"Broadway from a Hotel Window"}</h3>
							</header>
							<p>
								{
									"It’s been almost a year since the lights went out on Broadway. It goes without saying that New York City’s arts and culture sector has been decimated by the COVID-19 pandemic — but this past fall, we glimpsed a welcomed glimmer of the Theatre District’s greatness when Ace Hotel New York hosted a socially distanced dinner series called Broadway @ Breslin."
								}
							</p>
							<Link href={"/blog"}>
								<a>{"Read more"}</a>
							</Link>
						</section>
					</GridElement>
					<GridElement column={10} columnSpan={3} row={19} rowSpan={3}>
						<Link href={"/blog"}>
							<a className="circle">{"Read more"}</a>
						</Link>
					</GridElement>

					<GridElement column={4} columnSpan={7} row={28} rowSpan={4}>
						<Image
							src={"/card.jpg"}
							layout="fill"
							alt=""
							objectFit="contain"
							objectPosition={"center top"}
						/>
					</GridElement>
				</section>
				<Footer />
			</main>
			<style jsx>{`
				.grid {
					display: grid;
					grid-template-columns: repeat(16, calc(100vw / 16 - 0.5rem));
					grid-template-rows: repeat(48, calc(100vw / 16 - 0.5rem));
					gap: 0.5rem;
					width: 100vw;
				}
				.circle {
					color: var(--text-color);
					border: 4px solid var(--text-color);
					width: 100%;
					height: auto;
					display: flex;
					justify-content: center;
					align-content: center;
					align-items: center;
					text-align: center;
					font-size: 3vw;
					font-family: cooper-black-std;
					padding: 0.5em;
					line-height: 1em;
					font-weight: 900;
					text-transform: uppercase;
					text-decoration: none;
					border-radius: 50%;
					aspect-ratio: 1 / 1;
					box-sizing: border-box;
					position: relative;
					z-index: 1;
				}
				.circle:before {
					content: " ";
					position: absolute;
					z-index: 0;
					top: 4px;
					left: 4px;
					right: 4px;
					bottom: 4px;
					border-radius: 50%;
					border: 2px solid var(--text-color);
				}
				.entry span {
					width: 100%;
					display: block;
					aspect-ratio: 4 / 2;
				}
				.entry {
					position: relative;
					display: flex;
					flex: 0 0 auto;
					gap: 0.5em;
					width: 100%;
					font-size: 1rem;
					flex-direction: column;
					align-content: center;
					text-align: center;
					box-sizing: border-box;
					padding: calc(20px + 1em);
					border: 4px solid var(--text-color);
				}
				.entry:before {
					content: " ";
					position: absolute;
					z-index: 0;
					top: 4px;
					left: 4px;
					right: 4px;
					bottom: 4px;
					border: 2px solid var(--text-color);
				}
				.entry * {
					margin-bottom: 0;
				}
				.entry p {
					font: var(--font-annotation);
				}
				.entry a {
					font-size: 1em;
				}
			`}</style>
		</>
	);
}
