import React from "react";
import Link from "next/link";

export function Listicle() {
	return (
		<>
			<article>
				<dl>
					<dt>{"Things I like:"}</dt>
					<dd>{"Deserts of the American Southwest"}</dd>
					<dd>{"Every Ace Hotel"}</dd>
					<dd>{"Point and shoot film cameras"}</dd>
					<dd>{"Land-use conspiracy theories"}</dd>
					<dd>{"Danish Mid Century Modern"}</dd>
					<dd>{"Multi-day Amtrak trips across the United States"}</dd>
					<dd>{"Cocktail bars named after complete sentences"}</dd>
					<dd>
						<Link href="https://twitter.com/ninlive/status/1183382334868983814">
							{"This video of Trent Reznor starting a Nine Inch Nails set"}
						</Link>
					</dd>
					<dd>{"Dinner parties"}</dd>
					<dd>{"Wearing a cool black leather jacket listening to Judas Priest"}</dd>
				</dl>
			</article>
			<style jsx>{`
				dl {
					font-size: 0.75em;
					line-height: 1.05em;
				}
				dt {
					display: inline;
					font-weight: 700;
				}
				dt:after {
					content: "";
					margin: 0 0.2em;
				}
				dd,
				dd * {
					display: inline;
					font-weight: 400;
				}
				dd:after {
					content: "/";
					margin: 0 0.2em;
				}
				dd:last-of-type:after {
					display: none;
				}
			`}</style>
		</>
	);
}
