import Head from "next/head";
import { sluggify } from "../../helpers/urlHelpers";
import { Navigation } from "../../components/navigation";
import { Text } from "../../components/text";
import { Footer } from "../../components/footer";
import { getNotionPage, getNotionDatabase } from "../../helpers/notionHelpers";
import Link from "next/link";

export async function getStaticProps() {
	const page = await getNotionPage();
	const database = await getNotionDatabase();

	return {
		props: {
			database,
			page,
		},
		revalidate: 60,
	};
}

export default function Index({ page, database }) {
	return (
		<>
			<Head>
				<title>Tanner Godarzi&rsquo;s Blog</title>
				<meta name="title" content="Tanner Godarzi&rsquo;s Blog" />
				<meta name="description" content="Thoughts..." />
				<meta name="keywords" content="Tanner Godarzi, Tanner, Notion, Dropbox, black ops" />
			</Head>

			<main>
				<Navigation />
				<article className="container">
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
							<section className="entry" key={id}>
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
									<footer>
										<Link href={`/blog/${sluggify(Slug.url)}`}>
											<a>{"Read more →"}</a>
										</Link>
									</footer>
								</p>
							</section>
						);
					})}
				</article>
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
