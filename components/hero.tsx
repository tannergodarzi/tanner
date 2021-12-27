import React, { PropsWithChildren, useEffect, useState } from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import classNames from "classnames";

interface PosterProps {}
const Poster = ({ children }: PropsWithChildren<PosterProps>) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [coords, setCoordinates] = useState({});
	return (
		<span
			className={styles.poster}
			onMouseEnter={(event) => {
				setIsExpanded((a) => !a);
			}}
			onMouseLeave={(event) => {
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
					pointerEvents: "none",
				}}
			>
				{children}
			</picture>
		</span>
	);
};

export const Hero = () => {
	return (
		<section className={styles.hero}>
			<article>
				<p className="omega">
					{`Howdy, I’m Tanner — a cowboy on the internet `}
					<Poster>
						<Image src={"/cowboy.jpg"} alt={""} layout="fill" />
					</Poster>
					{` — living in San Francisco `}
					<Poster>
						<Image src={"/san-francisco.jpg"} alt={""} layout="fill" />
					</Poster>
					{" I’m A Front End Engineer telling the story of the future of work at Notion. "}
					<Poster>
						<Image src={"/notion-office.jpg"} alt={""} layout="fill" />
					</Poster>
					{" I love meeting new people over coffee. "}
					<Poster>
						<Image src={"/cowboy.jpg"} alt={""} layout="fill" />
					</Poster>
				</p>
			</article>
		</section>
	);
};
