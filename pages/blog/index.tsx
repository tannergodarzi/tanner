import Head from "next/head";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { getNotionDatabase } from "../../helpers/notionHelpers";
import Entry from "../../components/entry";

export async function getStaticProps() {
	const database = await getNotionDatabase({ page_size: 100 });
	return {
		props: {
			database,
		},
		revalidate: 60,
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
			<section className="container">
				<header className="hero">
					<h1>{"Blog"}</h1>
				</header>
				{database.map((entry) => (
					<Entry entry={entry} key={entry.id} />
				))}
			</section>
			<Footer />

			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					flex-grow: 1;
					gap: 2rem;
					height: 100%;
					width: min(100%, 45rem);
					box-sizing: border-box;
					padding: 0 1.5rem;
					margin: 2rem auto 0;
				}
				.hero {
					text-align: center;
					position: relative;
				}
			`}</style>
		</>
	);
}
