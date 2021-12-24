import Head from "next/head";
import styles from "../styles/pages/index.module.css";

export default function Index() {
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
				<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=true" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<article className={styles.bio}>
					<p>
						Hello, I&rsquo;m Tanner &mdash; a Front End Engineer &mdash; living in San Francisco. I&rsquo;m
						currently at <a href="https://www.notion.so/">Notion</a> telling the story of toolmaking for the
						future.
					</p>
				</article>
			</main>
		</>
	);
}
