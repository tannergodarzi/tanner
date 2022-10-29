import React from "react";
import Link from "next/link";
import GridElement from "../gridElement";
import Image from "next/image";
import Entry from "../entry";

import styles from "./grid.module.css";
import Bio from "../bio";
import Text from "../text";

export default function Grid({ children }) {
	return (
		<>
			<section className={styles.grid}>{children}</section>
			<style global jsx>{`
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
					width: 100%;
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
				.container {
					display: flex;
					flex-direction: column;
					flex-grow: 1;
					gap: 2rem;
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
