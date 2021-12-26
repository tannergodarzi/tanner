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
				<section className="container">
					{posts.map((post) => {
						if (!post.child_page || post.archived === true) {
							return null;
						}
						const { id, child_page, created_time } = post;
						return (
							<section key={id} className="entry">
								<h2 className="entry-title">
									<a href={`blog/${sluggify(child_page.title)}`}>{child_page.title}</a>
								</h2>
								<time dateTime={created_time}>
									{`Published ${new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
										new Date(created_time)
									)}`}
								</time>
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
					margin-bottom: 0.25rem;
				}
				.entry-title a {
					text-decoration: none;
				}
				.entry-title a:hover,
				.entry-title a:focus {
					text-decoration: underline;
				}
			`}</style>
		</>
	);
}
