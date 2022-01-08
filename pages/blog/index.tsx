import Head from "next/head";
import { sluggify } from "../../helpers/urlHelpers";
import { Navigation } from "../../components/navigation";
import { Text } from "../../components/text";
import { Footer } from "../../components/footer";
import { getNotionDatabase } from "../../helpers/notionHelpers";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps() {
	const database = await getNotionDatabase();
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
				<meta name="description" content="Thoughts..." />
			</Head>

			<Navigation />
			<article className="container">
				<section className="hero">
					<h1>
						<Image
							src={"/newspaper.jpg"}
							width={512}
							height={407}
							alt="Blog"
							objectFit="cover"
							objectPosition={"top center"}
						/>
					</h1>
				</section>
				{database.map((entry) => {
					const { id, properties } = entry;
					const { Published, Name, Slug, Subtitle } = properties;
					const publishedDate = new Intl.DateTimeFormat("en-US", {
						dateStyle: "long",
					}).format(new Date(Published.date.start));
					return (
						<section className="entry" key={id}>
							<Link href={`/blog/${sluggify(Slug.url)}`}>
								<a>
									<header>
										<h2 className="entry-title">
											<Text value={Name.title} />
										</h2>
										<time dateTime={publishedDate}>{`Published ${publishedDate}`}</time>
									</header>
									<p>
										<Text value={Subtitle.rich_text} />
									</p>
								</a>
							</Link>
						</section>
					);
				})}
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
				.entry {
					display: flex;
					flex-direction: column;
					text-align: center;
					width: 100%;
					margin-bottom: 4em;
				}
				.entry p {
					margin-bottom: 0;
				}
				.entry time {
					font-size: 0.5em;
					opacity: 0.75;
				}
				.entry header,
				.entry header * {
					margin-bottom: 0;
				}
				.entry a {
					font-weight: inherit;
					text-decoration: none;
				}
				.entry a:hover,
				.entry a:focus {
					opacity: 0.7;
				}
			`}</style>
		</>
	);
}
