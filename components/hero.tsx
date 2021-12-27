import React, { PropsWithChildren, useEffect, useState } from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import classNames from "classnames";

interface PosterProps {}
const Poster = ({ children }: PropsWithChildren<PosterProps>) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [coords, setCoordinates] = useState({ xPos: 0, yPos: 0 });
	return (
		<span
			className={styles.poster}
			onMouseEnter={(event) => {
				setIsExpanded((a) => !a);
				setCoordinates({ xPos: event.clientX, yPos: event.clientY });
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
						<Image src={"/the-good-the-bad-the-ugly.gif"} alt={""} layout="fill" objectFit="cover" />
					</Poster>
					{` — living in San Francisco `}
					<Poster>
						<Image src={"/san-francisco.gif"} alt={""} layout="fill" objectFit="cover" />
					</Poster>
					{" I’m A Front End Engineer telling the story of the future of work at Notion. "}
					<Poster>
						<Image src={"/notion-office.jpg"} alt={""} layout="fill" />
					</Poster>
					{" I love meeting new people over coffee. "}
					<Poster>
						<Image src={"/clint-eastwood.gif"} alt={""} layout="fill" objectFit="cover" />
					</Poster>
				</p>
			</article>
		</section>
	);
};
