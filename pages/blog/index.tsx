import Head from "next/head";
import { Client } from "@notionhq/client";
import { sluggify } from "../../helpers/urlHelpers";

// Notion client
const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export async function getServerSideProps(context) {
	const pageContent = await notion.blocks.children.list({
		block_id: process.env.NOTION_BLOG_PAGE,
	});

	const posts = pageContent.results.map((block) => {
		return block;
	});

	return {
		props: {
			posts: posts,
		},
	};
}

export default function Index(props) {
	const { posts } = props;
	return (
		<>
			<Head>
				<title>Blog of Tanner Godarzi</title>
				<meta charSet="UTF-8" />
				<meta name="title" content="Blog of Tanner Godarzi" />
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
				<section className="mast">
					<nav>
						<a href="./">{"Tanner"}</a>
						<a href="./">{"☰"}</a>
					</nav>
				</section>
				<section className="container">
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
								<time dateTime={created_time}>{publishedDate}</time>
							</section>
						);
					})}
				</section>
			</main>
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					width: min(100%, 1040px);
					box-sizing: border-box;
					padding: 0 max(1rem, 2rem);
					margin: 2rem auto;
				}
				.entry {
					display: flex;
					flex-direction: column;
					width: 100%;
					margin-bottom: 1rem;
					font-size: 0.75rem;
				}
				.entry-title {
					margin-bottom: 0.2em;
				}
				.entry-title a {
					text-decoration: none;
				}
				.entry time {
					line-height: 1em;
					font-family: monospace;
				}
				.entry-title a:hover,
				.entry-title a:focus {
					text-decoration: underline;
				}
				.mast {
					height: auto;
					padding: 0;
					box-sizing: border-box;
					position: sticky;
					top: 0;
					width: 100%;
					background: var(--page-background);
					z-index: 9999;
				}
				.mast nav {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					box-sizing: border-box;
					width: 100%;
					height: 100%;
					gap: 1rem;
					padding: 1.5rem;
					border-bottom: 1px solid rgba(255, 255, 255, 0.15);
				}
				.mast nav a {
					text-decoration: none;
					font-size: 2rem;
				}
			`}</style>
		</>
	);
}
