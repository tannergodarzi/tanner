import { checkForChildBlocks, getNotionBlogDatabase } from "../../helpers/notionHelpers";
import Entry from "../../components/entry";

import styles from "./index.module.css";
import { Metadata } from "next";
import { NotionBlogPages } from "../../library/notion";

export default async function BlogRoot() {
	const database = await getNotionBlogDatabase({ page_size: 100 });
	return (
		<section className={styles.container}>
			<header className={styles.header}>
				<h1>{"Blog"}</h1>
			</header>
			{await Promise.all(database.map(async (entry) => {
				const newQueryResponse = await NotionBlogPages.loadPageBySlug(entry["properties"].Slug.url as string);
				if (!newQueryResponse) {
					return 
				}
				return <Entry entry={entry} key={entry.id} />;
			}))}
		</section>
	);
}

export const metadata: Metadata = {
	title: "Tanner's Blog",
	description: "By night, I write about odd thoughts and conversations.",
	alternates: {
		canonical: new URL("https://www.tannergodarzi.com/blog"),
		types: {
			title: "Tanner's Very Cool RSS Feed",
			url: new URL("https://www.tannergodarzi.com/rss"),
		},
	},
};
