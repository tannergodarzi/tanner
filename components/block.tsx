import Image from "next/image";
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
					<Text value={value.text} />
				</h1>
			);
		case "heading_2":
			return (
				<h2 className={styles.heading_2}>
					<Text value={value.text} />
				</h2>
			);
		case "heading_3":
			return (
				<h3 className={styles.heading_3}>
					<Text value={value.text} />
				</h3>
			);
		case "paragraph":
			return (
				<p className={styles.paragraph}>
					<Text value={value.text} />
				</p>
			);
		case "bulleted_list_item":
		case "numbered_list_item":
			return (
				<ul className={styles.list_item}>
					<li>
						<Text value={value.text} />
					</li>
				</ul>
			);
		case "code":
			return (
				<pre>
					<code className={styles.code}>
						<Text value={value.text} />
					</code>
				</pre>
			);
		case "quote":
			return (
				<blockquote className={styles.quote}>
					<Text value={value.text} />
				</blockquote>
			);
		case "divider":
			return <hr key={id} className={styles.divider} />;
		case "bookmark":
			return (
				<figure className={styles.bookmark}>
					{value.caption.length > 0 && (
						<figcaption>
							<Text value={value.caption} />
						</figcaption>
					)}
					<a href={value.url}>{value.url}</a>
				</figure>
			);
		case "image":
			return (
				<figure>
					<Image src={block.image.file.url} width={1200} height={1200} alt={block.image.caption || ""} />
					<figcaption>
						<Text value={block.image.caption} />
					</figcaption>
				</figure>
			);
		default:
			return null;
	}
};
