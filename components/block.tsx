import React, { PropsWithChildren } from "react";
import styles from "./block.module.css";
import { Text } from "./text";

interface BlockProps {
	block: any;
}

export const Block = ({ block }: PropsWithChildren<BlockProps>) => {
	const { type, id } = block;
	const value = block[type];
	switch (type) {
		case "heading_1":
			return (
				<h1 className={styles.heading_1}>
					<Text value={value} />
				</h1>
			);
		case "heading_2":
			return (
				<h2 className={styles.heading_2}>
					<Text value={value} />
				</h2>
			);
		case "heading_3":
			return (
				<h3 className={styles.heading_3}>
					<Text value={value} />
				</h3>
			);
		case "paragraph":
			return (
				<p className={styles.paragraph}>
					<Text value={value} />
				</p>
			);
		case "bulleted_list_item":
		case "numbered_list_item":
			return (
				<ul className={styles.list_item}>
					<li>
						<Text value={value} />
					</li>
				</ul>
			);
		case "code":
			return (
				<pre>
					<code className={styles.code}>
						<Text value={value} />
					</code>
				</pre>
			);
		case "quote":
			return (
				<blockquote className={styles.quote}>
					<Text value={value} />
				</blockquote>
			);
		case "divider":
			return <hr key={id} className={styles.divider} />;
		default:
			return null;
	}
};
