import Head from "next/head";
import { Client } from "@notionhq/client";
import { sluggify } from "../../helpers/urlHelpers";
import { Navigation } from "../../components/navigation";
import { Text } from "../../components/text";

// Notion client
const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export async function getStaticProps() {
	const posts = await notion.blocks.children
		.list({
			block_id: process.env.NOTION_BLOG_PAGE,
		})
		.then((a) => a.results)
		.then((b) =>
			b.map((block) => {
				return block;
			})
		);

	const page = await notion.pages.retrieve({
		page_id: process.env.NOTION_BLOG_PAGE,
	});

	return {
		props: {
			posts,
			page,
		},
		revalidate: 60,
	};
}

export default function Index({ posts, page }) {
	console.log(page);
	return (
		<>
			<Head>
				<title>Tanner Godarzi&rsquo;s Blog</title>
				<meta charSet="UTF-8" />
				<meta name="title" content="Tanner Godarzi&rsquo;s Blog" />
				<meta
					name="description"
					content="a Front End Engineer living in San Francisco. I&rsquo;m
						currently at Notion telling the story of toolmaking for the
						future."
				/>
				<meta name="keywords" content="Tanner Godarzi, Tanner, Notion, Dropbox, black ops" />
				<meta name="author" content="Tanner Godarzi" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://use.typekit.net/wir7xtg.css" />
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
							<section key={id} className="entry">
								<h2 className="entry-title">
									<a href={`blog/${sluggify(child_page.title)}`}>{child_page.title}</a>
								</h2>
								<time dateTime={created_time}>{`Published ${publishedDate}`}</time>
							</section>
						);
					})}
				</section>
			</main>
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					width: min(100%, 90rem);
					box-sizing: border-box;
					padding: 0 1.5rem;
					margin: 4rem auto;
				}
				.container header {
					text-align: center;
					margin-bottom: 1em;
				}
				.entry {
					display: flex;
					flex-direction: column;
					text-align: center;
					width: 100%;
					margin-bottom: 4em;
					font-size: 0.85rem;
				}
				.entry-title {
					margin-bottom: 0.35em;
				}
				.entry-title a {
					text-decoration: none;
					display: block;
					width: 100%;
					transition: opacity 100ms ease;
				}
				.entry time {
					line-height: 1em;
					font-family: monospace;
					opacity: 0.75;
				}
				.entry-title a:hover,
				.entry-title a:focus {
					opacity: 0.7;
				}
			`}</style>
		</>
	);
}
