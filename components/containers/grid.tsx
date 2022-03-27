import React from "react";
import Link from "next/link";
import { GridElement } from "../gridElement";
import Image from "next/image";
import Bouncy from "../bouncy";
import { sluggify } from "../../helpers/urlHelpers";
import { Text } from "../text";
import { Entry } from "../entry";

export const Grid = ({ database }) => {
	console.log(database[0]);
	return (
		<>
			<section className="grid">
				<GridElement column={6} columnSpan={3} row={1} rowSpan={4}>
					<picture>
						<span>
							<Image
								src={"/tanner-foto.jpeg"}
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								alt="A photo of Tanner Godarzi dressed as a cowboy standing in front of the Red Dog Saloon in Pioneertown, California"
							/>
						</span>
					</picture>
				</GridElement>
				<GridElement column={9} columnSpan={5} row={1} rowSpan={4}>
					<Bio />
				</GridElement>
				<GridElement column={5} columnSpan={4} row={6} rowSpan={4}>
					<BioFollowUp />
				</GridElement>

				<GridElement column={11} columnSpan={5} row={6} rowSpan={6}>
					<Image
						src={"/NYC-2016-AIR-LAND-MATT_MURPHY-NOTE.jpg"}
						layout="fill"
						alt=""
						objectFit="contain"
						objectPosition={"top center"}
					/>
				</GridElement>

				<GridElement column={2} columnSpan={5} row={10} rowSpan={6}>
					<section className="entry frame">
						<Image src={"/newspaper.jpg"} alt="" width={1024} height={813} objectPosition={"top center"} />

						{database.map((entry) => (
							<Entry entry={entry} key={entry.id} showPublishDate={false} />
						))}
					</section>
				</GridElement>
				<GridElement column={8} columnSpan={2} row={13} rowSpan={2}>
					<Link href={"/blog"}>
						<a className="circle special">{"Blog"}</a>
					</Link>
				</GridElement>

				<GridElement column={2} columnSpan={12} row={20} rowSpan={6}>
					<Bouncy />
				</GridElement>

				<GridElement column={4} columnSpan={7} row={28} rowSpan={4}>
					<Image src={"/card.jpg"} layout="fill" alt="" objectFit="cover" objectPosition={"center top"} />
				</GridElement>
			</section>
			<style global jsx>{`
				.grid {
					margin-top: 10vh;
					display: grid;
					grid-template-columns: repeat(16, calc(100vw / 16 - 1rem));
					grid-template-rows: repeat(48, calc(100vw / 16 - 1rem));
					gap: 1rem;
					width: 100vw;
					--minFontSize: 12px;
					--maxFontSize: 32px;
					--scaler: 1vw;
					--font-body: normal normal 400 0.8rem/1.4em "ibm-plex-mono", sans-serif;
				}
				.grid p,
				.grid ul,
				.grid a:not(.special) {
					font: var(--font-body);
					line-height: 1.3em;
					font-size: clamp(var(--minFontSize), var(--scaler), var(--maxFontSize));
				}
				.grid h3 {
					font-size: calc(1.8 * clamp(var(--minFontSize), var(--scaler), var(--maxFontSize)));
				}
				.grid h3 {
					font-size: calc(1.6 * clamp(var(--minFontSize), var(--scaler), var(--maxFontSize)));
				}

				.circle {
					color: var(--text-color);
					border: 4px solid var(--text-color);
					width: 100%;
					height: auto;
					display: flex;
					justify-content: center;
					align-content: center;
					align-items: center;
					text-align: center;
					font-size: 3vw;

					padding: 0.5em;
					line-height: 1em;
					font-weight: 700;
					text-transform: uppercase;
					text-decoration: none;
					border-radius: 50%;
					aspect-ratio: 1 / 1;
					box-sizing: border-box;
					position: relative;
					z-index: 1;
				}
				.circle:before {
					content: " ";
					position: absolute;
					z-index: 0;
					pointer-events: none;
					top: 4px;
					left: 4px;
					right: 4px;
					bottom: 4px;
					border-radius: 50%;
					border: 2px solid var(--text-color);
				}
				.frame {
					box-sizing: border-box;
					padding: 1em;
					border: 4px solid var(--text-color);
					position: relative;
				}
				.frame:before {
					content: " ";
					position: absolute;
					z-index: 0;
					pointer-events: none;
					top: 4px;
					left: 4px;
					right: 4px;
					bottom: 4px;
					border: 2px solid var(--text-color);
				}

				.entry {
					display: flex;
					flex: 1 0 auto;
					gap: 1em;
					width: 100%;
					padding-bottom: 2rem;
					flex-direction: column;
					align-content: center;
					text-align: center;
					position: relative;
				}

				.entry * {
					margin-top: 0;
					margin-bottom: 0;
				}
			`}</style>
		</>
	);
};

/**
 * Local Components
 */

function Bio() {
	return (
		<>
			<article>
				<h2>{"Not actually a cowboy"}</h2>
				<p>
					{`I love adventure and a good felt hat. During the day I help tell the story of future of work tools at Notion and by night I write about odd thoughts and conversations. Weekends I can be found meandering around San Francisco with a camera. Previously I worked at Dropbox, Square and design agency / freelance work. I also worked with heavy metal band Machine Head in a past time. I’m eternally optimistic about the future. If you are too, then`}
				</p>
				<Link href={"/about"}>
					<a>{"read more →"}</a>
				</Link>
				<style jsx>{`
					article {
						width: 100%;
						width: 100%;
						display: flex;
						flex-direction: column;
						height: 100%;
					}
					article p {
						overflow: hidden;
						display: -webkit-box;
						-webkit-box-orient: vertical;

						/* <integer> values */
						-webkit-line-clamp: 6;
						line-clamp: 6;
						text-overflow: ellipsis;
						overflow: hidden;
					}
				`}</style>
			</article>
		</>
	);
}
function BioFollowUp() {
	return (
		<>
			<section>
				<h3>{"Things I like"}</h3>

				<ul>
					<li>{"Deserts of the American Southwest"}</li>
					<li>{"Ace Hotel"}</li>
					<li>{"Meandering with a film camera"}</li>
					<li>{"Land-use conspiracy theories"}</li>
					<li>
						<Link href="https://twitter.com/ninlive/status/1183382334868983814">
							<a>{"This video of Trent Reznor starting a Nine Inch Nails set"}</a>
						</Link>
					</li>
				</ul>
			</section>
			<style jsx>{`
				section {
					padding: 1em;
					border: 2px dotted var(--text-color);
				}
				section * {
					color: var(--text-color);
				}

				ul {
					list-style-type: none;

					margin: 1em auto 0;
				}
				li {
					display: inline;
				}
				li a {
					font: inherit;
				}
				li:after {
					content: "/";
					margin: 0 0.2em;
				}
				li:last-of-type:after {
					display: none;
				}
			`}</style>
		</>
	);
}
