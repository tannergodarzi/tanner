import Head from "next/head";
import {  getNotionDinnerWithFriendsDatabase } from "../../helpers/notionHelpers";
import Link from "next/link";
import { sluggify } from "../../helpers/urlHelpers";
import Text from "../../components/text";
import Image from "next/image";
import classNames from "classnames";

import styles from "./index.module.css";

export async function getStaticProps() {
	const database = await getNotionDinnerWithFriendsDatabase({ page_size: 10 });
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
						<h2>
							{
								"is a series of interviews about topics we’re passionate sharing in an intimate setting of food, ideally our favorite spots. Great food always tells a great story and sharing our stories establishes a sense of community. "
							}
						</h2>
					</header>
				</section>
				<section className={styles.sidekick}>
					<header>
						<h3>{"Recent"}</h3>
					</header>
				</section>
				<section className={styles.grid}>
					{database.map((entry) => {
						console.log(entry);
						return (
							<>
								<section key={entry.id} className={classNames(styles.medium, styles.module)}>
									<Link href={`/dinner-with-friends/${sluggify(entry.properties.Slug.url)}`}>
										<picture>
											{/*<Image
											src={entry.properties.Photos.files[0].file.url}
											alt=""
											style={{
												objectFit: "cover",
											}}
											fill
										/>*/}
										</picture>
										<section className={styles.description}>
											<header>
												<Text value={entry.properties.Title.title} />
											</header>
										</section>
									</Link>
								</section>

								<section key={entry.id} className={classNames(styles.smol, styles.module)}>
									<Link href={`/dinner-with-friends/${sluggify(entry.properties.Slug.url)}`}>
										<picture>
											{/*<Image
											src={entry.properties.Photos.files[0].file.url}
											alt=""
											style={{
												objectFit: "cover",
											}}
											fill
										/>*/}
										</picture>
										<section className={styles.description}>
											<header>
												<Text value={entry.properties.Title.title} />
											</header>
										</section>
									</Link>
								</section>

								<section key={entry.id} className={classNames(styles.smol, styles.module)}>
									<Link href={`/dinner-with-friends/${sluggify(entry.properties.Slug.url)}`}>
										<picture>
											{/*<Image
											src={entry.properties.Photos.files[0].file.url}
											alt=""
											style={{
												objectFit: "cover",
											}}
											fill
										/>*/}
										</picture>
										<section className={styles.description}>
											<header>
												<Text value={entry.properties.Title.title} />
											</header>
										</section>
									</Link>
								</section>

								<section key={entry.id} className={classNames(styles.small, styles.module)}>
									<Link href={`/dinner-with-friends/${sluggify(entry.properties.Slug.url)}`}>
										<picture>
											{/*<Image
											src={entry.properties.Photos.files[0].file.url}
											alt=""
											style={{
												objectFit: "cover",
											}}
											fill
										/>*/}
										</picture>
										<section className={styles.description}>
											<header>
												<Text value={entry.properties.Title.title} />
											</header>
										</section>
									</Link>
								</section>

								<section key={entry.id} className={classNames(styles.small, styles.module)}>
									<Link href={`/dinner-with-friends/${sluggify(entry.properties.Slug.url)}`}>
										<picture>
											{/*<Image
											src={entry.properties.Photos.files[0].file.url}
											alt=""
											style={{
												objectFit: "cover",
											}}
											fill
										/>*/}
										</picture>
										<section className={styles.description}>
											<header>
												<Text value={entry.properties.Title.title} />
											</header>
										</section>
									</Link>
								</section>

								<section key={entry.id} className={classNames(styles.small, styles.module)}>
									<Link href={`/dinner-with-friends/${sluggify(entry.properties.Slug.url)}`}>
										<picture>
											{/*<Image
											src={entry.properties.Photos.files[0].file.url}
											alt=""
											style={{
												objectFit: "cover",
											}}
											fill
										/>*/}
										</picture>
										<section className={styles.description}>
											<header>
												<Text value={entry.properties.Title.title} />
											</header>
										</section>
									</Link>
								</section>
							</>
						);
					})}
				</section>
			</section>
		</>
	);
}
