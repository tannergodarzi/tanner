import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Bio from "../components/bio";
import Grid from "../components/grid";
import { Listicle } from "../components/listicle";
import Entry from "../components/entry";
import Footer from "../components/footer";
import GridElement from "../components/gridElement";
import Hero from "../components/hero";
import Navigation from "../components/navigation";
import { getNotionDatabase } from "../helpers/notionHelpers";

import styles from "./index.module.css";

export async function getStaticProps() {
	const database = await getNotionDatabase({ page_size: 3 });
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
				<title>Howdy, I&rsquo;m Tanner &mdash; a real person on the internet.</title>
				<meta name="title" content="Howdy, I’m Tanner — a real person on the internet" />
				<meta name="og:title" content="Howdy, I’m Tanner — a real person on the internet" />

				<meta
					name="description"
					content="I’m also a Front End Engineer motivated by design thinking and story telling. Currently I’m at Notion telling the story of tools for work."
				/>
				<meta
					name="og:description"
					content="I’m also a Front End Engineer motivated by design thinking and story telling. Currently I’m at Notion telling the story of tools for work."
				/>
			</Head>
			<Navigation />
			<article>
				<Hero />
			</article>
			<Grid>
				<GridElement column={3} columnSpan={4} row={1} rowSpan={6}></GridElement>
				<GridElement column={7} columnSpan={5} row={1} rowSpan={6}>
					<Bio />
				</GridElement>

				<GridElement column={12} columnSpan={4} row={1} rowSpan={4}></GridElement>
				<GridElement column={6} columnSpan={3} row={8} rowSpan={4}>
					<iframe
						src="https://open.spotify.com/embed/playlist/6CFbyGpSDA0eXAiPJQcqnG?theme=0"
						width="100%"
						height="100%"
						frameBorder="0"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					/>
				</GridElement>
				<GridElement column={4} columnSpan={6} row={15} rowSpan={8}>
					<section className={styles.frame}>
						<section className={styles.content}>
							{database.map((entry) => (
								<Entry entry={entry} key={entry.id} />
							))}
						</section>
					</section>
				</GridElement>
				<GridElement column={11} columnSpan={3} row={18} rowSpan={3}>
					<Link href={"/blog"} className={styles.circle}>
						{"Blog"}
					</Link>
				</GridElement>
				<GridElement column={12} columnSpan={3} row={14} rowSpan={3}></GridElement>
				<GridElement column={10} columnSpan={4} row={22} rowSpan={6}>
					<section className={styles.frame}>
						<section className={styles.content}>
							<Listicle />
						</section>
					</section>
				</GridElement>
			</Grid>
			<Footer />
		</>
	);
}
