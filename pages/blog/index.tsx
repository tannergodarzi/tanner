import Head from "next/head";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { getNotionDatabase } from "../../helpers/notionHelpers";
import Entry from "../../components/entry";

import styles from "./index.module.css";

export async function getStaticProps() {
	const database = await getNotionDatabase({ page_size: 100 });
	return {
		props: {
			database,
		},
		revalidate: 120,
	};
}

export default function Index({ database }) {
	return (
		<>
			<Head>
				<title>Tanner&rsquo;s Blog</title>
				<meta name="title" content="Tanner Godarzi&rsquo;s Blog" />
				<meta name="description" content="By night, I write about odd thoughts and conversations." />
				<link
					rel="alternate"
					type="application/rss+xml"
					href="https://www.tannergodarzi.com/rss"
					title="Tanner's RSS Feed"
				></link>
			</Head>

			<Navigation />
			<section className={styles.container}>
				<header className={styles.header}>
					<h1>{"Blog"}</h1>
				</header>
				{database.map((entry) => (
					<Entry entry={entry} key={entry.id} />
				))}
			</section>
			<Footer />
		</>
	);
}
