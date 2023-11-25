import React from "react";
import Link from "next/link";
import { sluggify } from "../helpers/urlHelpers";
import Text from "./text";

import styles from "./entry.module.css";
import { NotionBlogPages } from "../library/notion";
import Block from "./block";

export default function Entry({ entry, blocks }) {
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
				{/*<time dateTime={publishedDate}>{`Published ${publishedDate}`}</time>*/}
			</header>
			{/*<p>
				<Text value={Subtitle.rich_text} />
	</p>*/}

			<article>
				{blocks.map((block) => {
					return <Block block={block} key={block.id} />;
				})}
			</article>
		</section>
	);
}
