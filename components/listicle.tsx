import React from "react";
import Link from "next/link";

import styles from "./listicle.module.css";

export function Listicle() {
	return (
		<article className={styles.listicle}>
			<dl>
				<dt>{"Things I like:"}</dt>
				<dd>{"Deserts of the American Southwest"}</dd>
				<dd>{"Every Ace Hotel"}</dd>
				<dd>{"Point and shoot film cameras"}</dd>
				<dd>{"Wearing a cool black leather jacket listening to Judas Priest"}</dd>
				<dd>{"Land-use conspiracy theories"}</dd>
				<dd>{"Danish Mid Century Modern"}</dd>
				<dd>{"Multi-day Amtrak trips across the United States"}</dd>
				<dd>{"Cocktail bars named after complete sentences"}</dd>
				<dd>{"Dinner parties"}</dd>
				<dd>
					<Link href="https://twitter.com/ninlive/status/1183382334868983814">
						{"This video of Trent Reznor starting a Nine Inch Nails set"}
					</Link>
				</dd>
				<dd>{"You"}</dd>
			</dl>
		</article>
	);
}
