import React from "react";
import Link from "next/link";
import { sluggify } from "../helpers/urlHelpers";
import { Text } from "./text";

export const Entry = ({ entry, showPublishDate = true }) => {
	const { Published, Name, Slug, Subtitle } = entry.properties;
	const publishedDate = new Intl.DateTimeFormat("en-US", {
		dateStyle: "long",
	}).format(new Date(Published.date.start));
	return (
		<>
			<section className="entry">
				<Link href={`/blog/${sluggify(Slug.url)}`}>
					<a>
						<header>
							<h2 className="entry-title">
								<Text value={Name.title} />
							</h2>
						</header>
						<p>
							<Text value={Subtitle.rich_text} />
						</p>
						{showPublishDate === true && (
							<time dateTime={publishedDate}>{`Published ${publishedDate}`}</time>
						)}
					</a>
				</Link>
			</section>

			<style jsx>{`
				.entry {
					display: flex;
					flex-direction: column;
					text-align: left;
					width: 100%;
					margin-bottom: 1em;
				}
				.entry p {
					margin-bottom: 0;
				}
				.entry time {
					font-size: 0.75em;
					opacity: 0.75;
				}
				.entry header,
				.entry header * {
					margin-bottom: 0;
				}
				.entry a {
					font-weight: inherit;
					text-decoration: none;
				}
				.entry a:hover,
				.entry a:focus {
					opacity: 0.7;
				}
			`}</style>
		</>
	);
};
