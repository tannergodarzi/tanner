import Head from "next/head";
import { sluggify } from "../../helpers/urlHelpers";
import { Navigation } from "../../components/navigation";
import { Text } from "../../components/text";
import { Footer } from "../../components/footer";
import { getNotionBlocks, getNotionPage } from "../../helpers/notionHelpers";
import Link from "next/link";

export async function getStaticProps() {
	const posts = await getNotionBlocks();
	const page = await getNotionPage();

	return {
		props: {
			posts,
			page,
		},
		revalidate: 60,
	};
}

export default function Index({ posts, page }) {
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
					{posts.map((post) => {
						if (!post.child_page || post.archived === true) {
							return null;
						}
						const { id, child_page, created_time } = post;
						const publishedDate = new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
							new Date(created_time)
						);
						return (
							<article key={id} className="entry">
								<header>
									<h2 className="entry-title">{child_page.title}</h2>
									<time dateTime={created_time}>{`Published ${publishedDate}`}</time>
								</header>
								<p>
									{
										"It’s been almost a year since the lights went out on Broadway. It goes without saying that New York City’s arts and culture sector has been decimated by..."
									}
								</p>

								<footer>
									<Link href={`blog/${sluggify(child_page.title)}`}>
										<a>{"Read more"}</a>
									</Link>
								</footer>
							</article>
						);
					})}
				</section>
				<Footer />
			</main>
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					width: min(100%, 45rem);
					box-sizing: border-box;
					padding: 0 1.5rem;
					margin: 4rem auto;
				}
				.container > header {
					text-align: center;
					margin-bottom: 1em;
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
