import Head from "next/head";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { getNotionDinnerWithFriendsDatabase } from "../../helpers/notionHelpers";
import Link from "next/link";
import { sluggify } from "../../helpers/urlHelpers";
import Text from "../../components/text";
import Image from "next/image";

export async function getStaticProps() {
	const database = await getNotionDinnerWithFriendsDatabase({ page_size: 100 });
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
				<title>Dinner With Friends</title>
			</Head>
			<Navigation />
			<section>
				{database.map((entry) => {
					return (
						<section key={entry.id}>
							<picture>
								<Image
									src={entry.properties.Photos.files[0].file.url}
									alt=""
									width={600}
									height={400}
								/>
							</picture>
							<header>
								<h2>
									<Text value={entry.properties.Title.title} />
								</h2>
							</header>
							<p>
								<Text value={entry.properties.Summary.rich_text} />
							</p>
							<Link href={`/dinner-with-friends/${sluggify(entry.properties.Slug.url)}`} passHref>
								{"Read more"}
							</Link>
						</section>
					);
				})}
			</section>
			<Footer />
		</>
	);
}
