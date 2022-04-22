import React from "react";
import Link from "next/link";
import { GridElement } from "../gridElement";
import Image from "next/image";
import Bouncy from "../bouncy";
import { Entry } from "../entry";

export const Grid = ({ database }) => {
	return (
		<>
			<section className="grid">
				<GridElement column={2} columnSpan={4} row={1} rowSpan={6}>
					<Image
						src={"/tanner-foto.jpeg"}
						layout="fill"
						alt=""
						objectFit="cover"
						objectPosition={"center center"}
					/>
				</GridElement>
				<GridElement column={7} columnSpan={4} row={1} rowSpan={6}>
					<Bio />
				</GridElement>

				<GridElement column={12} columnSpan={4} row={1} rowSpan={4}>
					<Image
						src={"/tanner-polaroid.jpeg"}
						layout="fill"
						alt=""
						objectFit="cover"
						objectPosition={"center top"}
					/>
				</GridElement>

				<GridElement column={10} columnSpan={6} row={6} rowSpan={7}>
					<Image
						src={"/NYC-2016-AIR-LAND-MATT_MURPHY-NOTE.jpg"}
						layout="fill"
						alt=""
						objectFit="contain"
						objectPosition={"top center"}
					/>
				</GridElement>

				<GridElement column={2} columnSpan={6} row={15} rowSpan={8}>
					<section className="frame" style={{ textAlign: "center" }}>
						<div style={{ marginBottom: "1em" }}>
							<Image src={"/drop+out.jpg"} alt="" width={500} height={333} layout="responsive" />
						</div>
						{database.map((entry) => (
							<Entry entry={entry} key={entry.id} showPublishDate={false} />
						))}
					</section>
				</GridElement>
				<GridElement column={4} columnSpan={2} row={23} rowSpan={2}>
					<Link href={"/blog"}>
						<a className="circle">{"Blog"}</a>
					</Link>
				</GridElement>

				<GridElement column={5} columnSpan={4} row={8} rowSpan={6}>
					<iframe
						src="https://open.spotify.com/embed/playlist/6CFbyGpSDA0eXAiPJQcqnG?theme=0"
						width="100%"
						height="100%"
						frameBorder="0"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					/>
				</GridElement>
				<GridElement column={12} columnSpan={3} row={14} rowSpan={2}></GridElement>

				<GridElement column={10} columnSpan={4} row={14} rowSpan={3}>
					<picture className="picture-frame">
						<Image src={"/tanner-candid.jpg"} width={1000} height={675} alt="" />
					</picture>
				</GridElement>

				<GridElement column={10} columnSpan={6} row={20} rowSpan={6}>
					<BioFollowUp />
				</GridElement>

				<GridElement column={4} columnSpan={8} row={26} rowSpan={6}>
					<picture>
						<Image
							src={"/card.jpg"}
							layout="fill"
							alt=""
							objectFit="contain"
							objectPosition={"center top"}
						/>
					</picture>
				</GridElement>
			</section>
			<style global jsx>{`
				.grid {
					display: grid;
					grid-template-columns: repeat(16, calc(100vw / 16 - 1rem));
					grid-template-rows: repeat(32, calc(100vw / 16 - 1rem));
					gap: 1rem;
					max-width: (2rem - 100vw);
					margin: auto;
					margin-top: 5vh;
				}

				.grid * {
					//font-family: "ibm-plex-mono";
					//font-weight: 200;
				}

				.circle {
					color: var(--text-color);
					border: 2px solid var(--text-color);
					width: 100%;
					height: auto;
					display: flex;
					justify-content: center;
					align-content: center;
					align-items: center;
					text-align: center;
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
					border: 1px solid var(--text-color);
				}
				.frame {
					box-sizing: border-box;
					padding: 1em;
					border: 2px solid var(--text-color);
					position: relative;
					overflow: hidden;
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
					border: 1px solid var(--text-color);
				}
				.picture-frame {
					position: relative;
					width: 100%;
					height: 100%;
					background: #ffffff;
					padding: 10px;
					border: 1px solid #f7f7f7;
					display: block;
					box-sizing: border-box;
					box-shadow: 2px 2px 21px 5px rgba(0, 0, 0, 0.1);
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
			</article>
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
					-webkit-line-clamp: 10;
					line-clamp: 10;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			`}</style>
		</>
	);
}
function BioFollowUp() {
	return (
		<>
			<article className="frame">
				<ul>
					<li>
						<h3>Things I Like</h3>
					</li>
					<li>{"Deserts of the American Southwest"}</li>
					<li>{"Every Ace Hotel"}</li>
					<li>{"Point and shoot film cameras"}</li>
					<li>{"Land-use conspiracy theories"}</li>
					<li>{"Danish Mid Century Modern"}</li>
					<li>{"Amtrak"}</li>
					<li>{"Cocktail bars named after complete sentences"}</li>
					<li>
						<Link href="https://twitter.com/ninlive/status/1183382334868983814">
							<a>{"This video of Trent Reznor starting a Nine Inch Nails set"}</a>
						</Link>
					</li>
				</ul>
			</article>
			<style jsx>{`
				li,
				li * {
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
