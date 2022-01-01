import Head from "next/head";
import { sluggify } from "../../helpers/urlHelpers";
import { Navigation } from "../../components/navigation";
import { Text } from "../../components/text";
import { Footer } from "../../components/footer";
import { getNotionBlocks, getNotionPage, getNotionDatabase } from "../../helpers/notionHelpers";
import Link from "next/link";

export async function getStaticProps() {
	const posts = await getNotionBlocks();
	const page = await getNotionPage();
	const database = await getNotionDatabase();

	return {
		props: {
			database,
			posts,
			page,
		},
		revalidate: 60,
	};
}

export default function Index({ posts, page, database }) {
	return (
		<>
			<Head>
				<title>Tanner Godarzi&rsquo;s Blog</title>
				<meta name="title" content="Tanner Godarzi&rsquo;s Blog" />
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
				<section className="container">
					<header>
						<h1>
							<Text value={page.properties.title.title} />
						</h1>
					</header>
					{database.map((entry) => {
						const { id, properties } = entry;
						const { Published, Name, Slug, Subtitle } = properties;
						const publishedDate = new Intl.DateTimeFormat("en-US", {
							dateStyle: "long",
						}).format(new Date(Published.date.start));
						return (
							<article className="entry" key={id}>
								<header>
									<h2 className="entry-title">
										<Link href={`/blog/${sluggify(Slug.url)}`}>
											<a>
												<Text value={Name.title} />
											</a>
										</Link>
									</h2>
									<time dateTime={publishedDate}>{`Published ${publishedDate}`}</time>
								</header>
								<p>
									<Text value={Subtitle.rich_text} />
								</p>
								<footer>
									<Link href={`/blog/${sluggify(Slug.url)}`}>
										<a>{"Read more →"}</a>
									</Link>
								</footer>
							</article>
						);
					})}
				</section>
				<Footer />
			</main>
			<style jsx>{`
				main {
					min-height: 100vh;
					display: flex;
					flex-direction: column;
					position: relative;
				}
				.container {
					display: flex;
					flex-direction: column;
					flex-grow: 1;
					height: 100%;
					width: min(100%, 45rem);
					box-sizing: border-box;
					padding: 0 1.5rem;
					margin: 2rem auto 0;
				}
				.container > header {
					text-align: center;
				}
				.container h1 {
					font: var(--font-presentation);
					text-transform: uppercase;
				}
				.entry {
					display: flex;
					flex-direction: column;
					text-align: left;
					width: 100%;
					margin-bottom: 4em;
				}
				.entry-title a {
					text-decoration: none;
				}
				.entry p {
					margin-bottom: 0;
				}
				.entry time {
					font: var(--font-annotation);
					font-size: 0.75em;
					opacity: 0.75;
				}
				.entry header {
					margin-bottom: 0.75em;
				}
				.entry a:hover,
				.entry a:focus {
					opacity: 0.7;
				}
			`}</style>
		</>
	);
}
