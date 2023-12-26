import React from "react";
import Link from "next/link";
import { sluggify } from "../helpers/urlHelpers";
import Text from "./text";

import styles from "./entry.module.css";
import Block from "./block";

interface EntryProps {
	entry: any
	blocks?: any
}

export default function Entry({ entry, blocks }: EntryProps) {
	const { Published, Name, Slug, Subtitle } = entry.properties;
	const publishedDate = new Intl.DateTimeFormat("en-US", {
		dateStyle: "long",
	}).format(new Date(Published.date.start));

	return (
		<section className={styles.entry}>
			<header>
				<h2>
					<Link href={`/blog/${sluggify(Slug.url)}`} passHref>
						<Text value={Name.title} />{" "}
					</Link>
				</h2>
				<time dateTime={publishedDate}>{`Published ${publishedDate}`}</time>
			</header>
			<p>
				<Text value={Subtitle.rich_text} />
			</p>

			{blocks ? (
				<article>
					{blocks.map((block: any) => {
						return <Block block={block} key={block.id} />;
					})}
				</article>
			) : null}
		</section>
	);
}
