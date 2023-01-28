import React from "react";
import Link from "next/link";

import styles from "./bio.module.css";
import Text from "./text";

export default function Bio() {
	return (
		<article className={styles.bio}>
			<h2>{"Not actually a cowboy"}</h2>
			<span>
				<Text
					value={[
						{
							text: {
								content: `I love adventure and a good felt hat. During the day I help tell the story of future of work tools at Notion and by night I write about odd thoughts and conversations. Weekends I can be found meandering around San Francisco with a camera. Previously I worked at Dropbox, Square and design agency / freelance work. I also worked with heavy metal band Machine Head in a past time. I’m eternally optimistic about the future. If you are too, let's talk`,
							},
						},
					]}
				/>
			</span>
			<Link href={"/about"}>{"Read More →"}</Link>
		</article>
	);
}
