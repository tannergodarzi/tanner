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
		case "column_list":
			return (
				<>
					<section className="column_list">
						{block.column_list.map((column) => {
							return (
								<section key={column.id} className="column">
									{column.column.map((block) => {
										return <Block block={block} key={block.id} />;
									})}
								</section>
							);
						})}
					</section>
					<style global jsx>{`
						.column_list {
							display: flex;
							flex-direction: row;
							flex-wrap: wrap;
							gap: 1rem;
							overflow: hidden;
							margin: 0.2rem 0 1.5rem;
						}
						.column {
							overflow: hidden;
							display: flex;
							flex-direction: column;
							flex: 1 0 auto;
							width: min(100vw / ${block.column_list.length}, 300px);
						}
					`}</style>
				</>
			);
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
					{block.bulleted_list_item.text.map((value, index) => {
						return (
							<li key={index}>
								<Text value={[value]} />
							</li>
						);
					})}
				</ul>
			);
		case "code":
			return (
				<pre className={styles.code}>
					<code>{value.text[0].text.content}</code>
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
			const innerText = value.caption.length > 0 ? <Text value={value.caption} /> : value.url;
			return (
				<a href={value.url} className={styles.bookmark}>
					{innerText}
				</a>
			);
		case "image":
			const { image } = block;
			return (
				<>
					<picture className={"image"}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={image.external?.url || image.file?.url} alt={image.caption[0]?.plain_text || ""} />
						{image.caption.length > 0 && (
							<figcaption>
								<Text value={image.caption} key={id} />
							</figcaption>
						)}
					</picture>
					<style jsx>{`
						.image {
							width: 100%;
							margin-top: 1.7rem;
							display: block;
						}
						.image img {
							display: block;
							height: auto;
							width: 100%;
						}
						.image figcaption {
							margin-top: 0.75em;
							font: var(--font-annotation);
							font-size: 0.6rem;
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
