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
	console.log(type);
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
					<li className={styles.text}>
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
			const innerText = value.caption.length > 0 ? <Text value={value.caption} /> : value.url
			return (
				<a href={value.url} className={styles.bookmark}>
					{innerText}
				</a>
			);
		case "image":
			const { image } = block;
			return (
				<figure className={styles.image}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src={image.file.url} alt={image.caption} />
					{image.caption.length > 0 && (
						<figcaption>
							<Text value={image.caption} />
						</figcaption>
					)}
				</figure>
			);
		case "embed":
			return (
				<figure className={styles.embed}>
					<iframe src={block.embed.url} width="1600px" height="900px" />
					{block.embed.caption.length > 0 && (
						<figcaption>
							<Text value={block.embed.caption} />
						</figcaption>
					)}
				</figure>
			);
		default:
			return null;
	}
};
