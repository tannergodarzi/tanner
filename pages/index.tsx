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
							<Link href={"/about"}>
								<a>{"Read more"}</a>
							</Link>
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
					<GridElement column={2} columnSpan={14} row={16} rowSpan={1}>
						<header>
							<h2>{"Selected Writings"}</h2>
						</header>
					</GridElement>
					{posts.map((post, index: number) => {
						if (!post.child_page || post.archived === true) {
							return null;
						}
						const { id, child_page, created_time } = post;
						const publishedDate = new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
							new Date(created_time)
						);
						if (index > 2) {
							return null;
						}
						return (
							<GridElement column={2 + 4 * index} columnSpan={4} row={17 + 0} rowSpan={3} key={id}>
								<section className="entry">
									<h3 className="entry-title">{child_page.title}</h3>

									<time dateTime={created_time}>{`Published ${publishedDate}`}</time>
									<a href={`blog/${sluggify(child_page.title)}`}>{"Read more"}</a>
								</section>
							</GridElement>
						);
					})}
					<GridElement column={8} columnSpan={7} row={21} rowSpan={4}>
						<Image src={"/card.jpg"} layout="fill" alt="" objectFit="contain" />
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
				.entry {
					border: 2px solid var(--color-medium);
					display: flex;
					flex-direction: column;
					height: 100%;
					box-sizing: border-box;
					padding: 1em;
				}
				.entry-title {
					margin-bottom: 0.2em;
				}
				.entry a {
					margin-top: auto;
					text-decoration: none;
					display: flex;
					align-items: center;
				}
				.entry a:after {
					content: " ⭢";
					display: inline-block;
					margin-left: 0.2em;
					height: 1em;
				}
				.entry time {
					font-size: 0.6rem;
				}
			`}</style>
		</>
	);
}
