import Head from "next/head";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { getNotionDinnerWithFriendsDatabase } from "../../helpers/notionHelpers";
import Link from "next/link";
import { sluggify } from "../../helpers/urlHelpers";
import Text from "../../components/text";
import Image from "next/image";
import classNames from "classnames";

import styles from "./index.module.css";

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
			<section className={styles.app}>
				<section className={styles.hero}>
					<header>
						<h1>{"Dinner With Friends"}</h1>
						<h2>{"is a..."}</h2>
					</header>
				</section>
				<section className={styles.grid}>
					{database.map((entry) => {
						return (
							<>
								<section key={entry.id} className={classNames(styles.large, styles.module)}>
									<picture>
										<Image
											src={entry.properties.Photos.files[0].file.url}
											alt=""
											style={{
												objectFit: "cover",
											}}
											fill
										/>
									</picture>
									<section className={styles.description}>
										<header>
											<Text value={entry.properties.Title.title} />
										</header>
										<Link href={`/dinner-with-friends/${sluggify(entry.properties.Slug.url)}`}>
											{"Read more"}
										</Link>
									</section>
								</section>

								<section key={entry.id} className={classNames(styles.small, styles.module)}>
									<picture>
										<Image
											src={entry.properties.Photos.files[0].file.url}
											alt=""
											style={{
												objectFit: "cover",
											}}
											fill
										/>
									</picture>
									<section className={styles.description}>
										<header>
											<Text value={entry.properties.Title.title} />
										</header>
										<Link href={`/dinner-with-friends/${sluggify(entry.properties.Slug.url)}`}>
											{"Read more"}
										</Link>
									</section>
								</section>

								<section key={entry.id} className={classNames(styles.medium, styles.module)}>
									<picture>
										<Image
											src={entry.properties.Photos.files[0].file.url}
											alt=""
											style={{
												objectFit: "cover",
											}}
											fill
										/>
									</picture>
									<section className={styles.description}>
										<header>
											<Text value={entry.properties.Title.title} />
										</header>
										<Link href={`/dinner-with-friends/${sluggify(entry.properties.Slug.url)}`}>
											{"Read more"}
										</Link>
									</section>
								</section>

								<section key={entry.id} className={classNames(styles.medium, styles.module)}>
									<picture>
										<Image
											src={entry.properties.Photos.files[0].file.url}
											alt=""
											style={{
												objectFit: "cover",
											}}
											fill
										/>
									</picture>
									<section className={styles.description}>
										<header>
											<Text value={entry.properties.Title.title} />
										</header>
										<Link href={`/dinner-with-friends/${sluggify(entry.properties.Slug.url)}`}>
											{"Read more"}
										</Link>
									</section>
								</section>
							</>
						);
					})}
				</section>
			</section>
		</>
	);
}
