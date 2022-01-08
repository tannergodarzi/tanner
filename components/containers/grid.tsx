import React from "react";
import Link from "next/link";
import { GridElement } from "../gridElement";
import Image from "next/image";

export const Grid = () => {
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
								alt=""
							/>
						</span>
					</picture>
				</GridElement>
				<GridElement column={9} columnSpan={5} row={1} rowSpan={4}>
					<Bio />
				</GridElement>
				<GridElement column={6} columnSpan={3} row={6} rowSpan={4}>
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
						<span>
							<Image
								src={"/newspaper.jpeg"}
								layout="fill"
								alt=""
								objectFit="cover"
								objectPosition={"top center"}
							/>
						</span>
						<header>
							<h3>{"Broadway from a Hotel Window"}</h3>
						</header>
						<p>
							{
								"It’s been almost a year since the lights went out on Broadway. It goes without saying that New York City’s arts and culture sector has been decimated by the COVID-19 pandemic — but this past fall, we glimpsed a welcomed glimmer of the Theatre District’s greatness when Ace Hotel New York hosted a socially distanced dinner series called Broadway @ Breslin."
							}
						</p>
						<Link href={"/blog"}>
							<a>{"Read more"}</a>
						</Link>
					</section>
				</GridElement>
				<GridElement column={8} columnSpan={2} row={13} rowSpan={2}>
					<Link href={"/blog"}>
						<a className="circle special">{"Blog"}</a>
					</Link>
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
				.entry span {
					width: 100%;
					display: block;
					aspect-ratio: 4 / 2;
					position: relative;
					font-size: 0;
				}
				.entry {
					display: flex;
					flex: 0 0 auto;
					gap: 1em;
					width: 100%;
					padding-bottom: 2rem;
					flex-direction: column;
					align-content: center;
					text-align: center;
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
			<h2>{"Not actually a cowboy"}</h2>
			<p>
				{`Ace Activity Book
 Connect the dots, color inside (or outside) the lines, draw
your essence. Fun pages from our pals the Haas Brothers,
Nathaniel Russell, Andy Plants and yours truly, Ace Hotel.
Recipes
Favorites, classics and signature dishes from our culinary
partners
at Bar Marilou
(New Orleans), Best Girl (Los Angeles),
The Breslin (New York City), City Mouse (Chicago), Josephine
Estelle (New Orleans),
Seaworthy (New Orleans), King's Highway
(Palm Springs), Hoi Polloi (Iondon), and Whitfield (Pittsburgh)`}
			</p>
			<Link href={"/about"}>
				<a>{"Read more"}</a>
			</Link>
			<style jsx>{``}</style>
		</>
	);
}
function BioFollowUp() {
	return (
		<>
			<section>
				<h3>{"Things I like"}</h3>
				<p>
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
				</p>
			</section>
			<style jsx>{`
				section {
					padding: 1em;
					border: 2px dotted var(--color-dark);
				}
				section * {
					color: var(--color-dark);
				}
				p {
					margin: 0;
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
