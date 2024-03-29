import Image from "next/image";
import React, { PropsWithChildren } from "react";
import styles from "./block.module.css";
import Text from "./text";

interface BlockProps {
	block: any;
}

export default function Block({ block }: PropsWithChildren<BlockProps>) {
	const { type, id } = block;
	const value = block[type];
	switch (type) {
		case "column_list":
			return (
				<>
					<section className={styles.column_list}>
						{block.column_list.map((column) => {
							if (!column || !column.column || !Array.isArray(column.column)) {
								return;
							}
							return (
								<section
									key={column.id}
									className={styles.column}
									style={{
										width: `min(100vw / ${block.column_list.length}, 300px)`,
									}}
								>
									{column.column.map((block) => {
										return <Block block={block} key={block.id} />;
									})}
								</section>
							);
						})}
					</section>
				</>
			);
		case "heading_1":
			return (
				<h1 className={styles.heading_1}>
					<Text value={value.rich_text} />
				</h1>
			);
		case "heading_2":
			return (
				<h2 className={styles.heading_2}>
					<Text value={value.rich_text} />
				</h2>
			);
		case "heading_3":
			return (
				<h3 className={styles.heading_3}>
					<Text value={value.rich_text} />
				</h3>
			);
		case "paragraph":
			return (
				<p className={styles.paragraph}>
					<Text value={value.rich_text} />
				</p>
			);
		case "bulleted_list_item":
		case "numbered_list_item":
			return (
				<ul className={styles.list_item}>
					{block.bulleted_list_item.rich_text.map((value, index) => {
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
					<code>{value.rich_text[0].text.content}</code>
				</pre>
			);
		case "callout":
			return (
				<blockquote className={styles.callout}>
					<span>{value.icon.emoji}</span>
					<span>
						<Text value={value.rich_text} />
					</span>
				</blockquote>
			);
		case "quote":
			return (
				<blockquote className={styles.quote}>
					<Text value={value.rich_text} />
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
				<picture className={styles.image}>
					{image.external?.url ? (
						/* eslint-disable @next/next/no-img-element */
						<img
							src={image.external?.url}
							alt={image.caption.length > 0 ? image.caption : ""}
							width={1000}
							height={1000}
							style={{
								width: "100%",
								height: "auto",
								display: "block",
							}}
						/>
					) : (
						<Image
							src={`/api/notion-asset/block/${block.id}/image?last_edited_time=${block.last_edited_time}`}
							alt={image.caption[0]?.plain_text || ""}
							loading="eager"
							quality={75}
							width={1000}
							height={1000}
							style={{
								width: "100%",
								height: "auto",
								display: "block",
							}}
						/>
					)}
					{image.caption.length > 0 && (
						<figcaption>
							<Text value={image.caption} key={id} />
						</figcaption>
					)}
				</picture>
			);
		case "embed":
			return (
				<figure className={styles.embed}>
					<iframe src={block.embed.url} />
					{block.embed.caption.length > 0 && (
						<figcaption>
							<Text value={block.embed.caption} />
						</figcaption>
					)}
				</figure>
			);
		case "video":
			return (
				<figure className={styles.embed}>
					{block.video.type === "external" && (
						<iframe src={block.video.type === "external" ? block.video.external.url : block.video.url} />
					)}
					{block.video.type !== "external" && (
						<video
							controls
							preload="auto"
							src={`/api/notion-asset/block/${block.id}/file?last_edited_time=${block.last_edited_time}`}
						></video>
					)}
					{block.video.caption.length > 0 && (
						<figcaption>
							<Text value={block.video.caption} />
						</figcaption>
					)}
				</figure>
			);
		default:
			return null;
	}
}
