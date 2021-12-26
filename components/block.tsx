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
				<>
					<blockquote className={"quote"}>
						<Text value={value.text} />
					</blockquote>
					<style jsx>{`
						.quote {
							font-size: 1.2rem;
							font-weight: 700;
							font-style: italic;
							text-align: center;
							quotes: "“" "”";
						}
						.quote::before {
							content: open-quote;
						}
						.quote::after {
							content: close-quote;
						}
					`}</style>
				</>
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
			const { image } = block;
			return (
				<>
					<figure className="block-image">
						<img src={image.file.url} alt={image.caption} />
						{image.caption.length > 0 && (
							<figcaption>
								<Text value={image.caption} />
							</figcaption>
						)}
					</figure>
					<style jsx>{`
						.block-image {
							width: max(256px, 80%);
							margin: auto;
							display: block;
						}
						.block-image img {
							display: block;
							height: auto;
							width: 100%;
						}
						.block-image figcaption {
							margin-top: 0.25rem;
							font-size: 0.8rem;
							opacity: 0.8;
						}
					`}</style>
				</>
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
