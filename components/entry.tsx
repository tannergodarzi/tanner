import React from "react";
import Link from "next/link";
import { sluggify } from "../helpers/urlHelpers";
import Text from "./text";

import styles from "./entry.module.css";

export default function Entry({ entry, showPublishDate = true }) {
	const { Published, Name, Slug, Subtitle } = entry.properties;
	const publishedDate = new Intl.DateTimeFormat("en-US", {
		dateStyle: "long",
	}).format(new Date(Published.date.start));

	return (
		<section className={styles.entry}>
			<Link href={`/blog/${sluggify(Slug.url)}`} passHref>
				<header>
					<h2>
						<Text value={Name.title} />
					</h2>
				</header>
				<p>
					<Text value={Subtitle.rich_text} />
				</p>
				{showPublishDate === true && <time dateTime={publishedDate}>{`Published ${publishedDate}`}</time>}
			</Link>
		</section>
	);
};
