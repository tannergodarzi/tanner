import React, { PropsWithChildren, useState } from "react";
import classNames from "classnames";

interface PosterProps {}
const Poster = ({ children }: PropsWithChildren<PosterProps>) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [coords, setCoordinates] = useState({ xPos: 0, yPos: 0 });
	return (
		<>
			<span
				className={classNames("poster", {
					"poster-expanded": isExpanded,
				})}
				onMouseEnter={(event) => {
					setIsExpanded((a) => !a);
					setCoordinates({ xPos: event.clientX, yPos: event.clientY });
				}}
				onMouseLeave={() => {
					setIsExpanded(false);
				}}
				onMouseMove={(event) => {
					setCoordinates({ xPos: event.clientX, yPos: event.clientY });
				}}
			>
				<picture
					className={classNames("picture", {
						"picture-expanded": isExpanded,
					})}
					style={{
						top: coords.yPos,
						left: coords.xPos,
						pointerEvents: "none",
					}}
				>
					{children}
				</picture>
			</span>
			<style jsx>{`
				.poster {
					display: inline-block;
					aspect-ratio: 2 / 1;
					border-radius: 0.05em;
					height: 0.8em;
					top: 0.05em;
					margin: 0 0.25em;
					align-self: baseline;
					cursor: pointer;
					z-index: 1;
					position: relative;
					pointer-events: all;
					box-sizing: border-box;
					overflow: hidden;
				}
				.poster-expanded {
					z-index: 100;
				}

				.picture {
					aspect-ratio: 1 /1;
				}

				.picture-expanded {
					width: 20rem;
					height: 20rem;
					transform: translate(-50%, -33%);
					transform-origin: center center;
					position: fixed;
					z-index: 2;
				}
			`}</style>
		</>
	);
};

export default Poster;
