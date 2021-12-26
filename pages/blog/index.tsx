import Head from "next/head";
import styles from "../styles/pages/index.module.css";
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
				<title>Hello, I&rsquo;m Tanner</title>
				<meta charSet="UTF-8" />
				<meta name="title" content="Hello, I'm Tanner" />
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
				<section>
					{posts.map((post) => {
						if (!post.child_page) {
							return null;
						}
						const { id, child_page } = post;
						return (
							<article key={id}>
								<header>
									<h1>
										<a href={`blog/${sluggify(child_page.title)}`}>{child_page.title}</a>
									</h1>
								</header>
							</article>
						);
					})}
				</section>
			</main>
		</>
	);
}
