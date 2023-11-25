"use client"

import React, { PropsWithChildren, useState } from "react";
import classNames from "classnames";

import styles from "./poster.module.css";

interface PosterProps {}
export default function Poster({ children }: PropsWithChildren<PosterProps>) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [coords, setCoordinates] = useState({ xPos: 0, yPos: 0 });
	return (
		<>
			<span
				className={classNames(styles.poster, {
					[styles.poster_expanded]: isExpanded,
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
					className={classNames(styles.picture, {
						[styles.picture_expanded]: isExpanded,
					})}
					style={{
						top: coords.yPos,
						left: coords.xPos,
					}}
				>
					{children}
				</picture>
			</span>
		</>
	);
};

