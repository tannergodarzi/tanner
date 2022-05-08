import Head from "next/head";
import { sluggify } from "../../helpers/urlHelpers";
import { Navigation } from "../../components/navigation";
import { Text } from "../../components/text";
import { Footer } from "../../components/footer";
import { getNotionDatabase } from "../../helpers/notionHelpers";
import Link from "next/link";
import Image from "next/image";
import { Entry } from "../../components/entry";

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
			</Head>

			<Navigation />
			<article className="container">
				<section className="hero">
					<h1>
						<Image
							src={"/newspaper.jpeg"}
							width={570}
							height={447}
							alt="Blog"
							objectFit="cover"
							objectPosition={"top center"}
						/>
					</h1>
				</section>
				{database.map((entry) => (
					<Entry entry={entry} key={entry.id} />
				))}
			</article>
			<Footer />

			<style jsx>{`
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
				.hero {
					text-align: center;
					position: relative;
					margin-bottom: 2rem;
				}
				.hero h1 {
					font-size: 0;
					margin: 0;
				}
			`}</style>
		</>
	);
}
