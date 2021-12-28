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
			className={classNames(styles.poster, {
				[styles.poster_expanded]: isExpanded,
			})}
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
				<p className={styles.hero_text}>
					<span>{`Howdy, I’m Tanner — a real person on the internet — `}</span>
					<Poster>
						<Image src={"/clint-eastwood.gif"} alt={""} layout="fill" objectFit="cover" />
					</Poster>

					<span>{` living in San Francisco. `}</span>
					<Poster>
						<Image src={"/san-francisco.jpg"} alt={""} layout="fill" objectFit="cover" />
					</Poster>
					<span>{" I’m a Front End Engineer at Notion on Brand Marketing. "}</span>
					<Poster>
						<Image src={"/notion-office.jpg"} alt={""} layout="fill" objectFit="cover" />
					</Poster>
					<span>
						{" Story telling and engineering paired with design thinking are my passions when building. "}
					</span>
					<Poster>
						<Image src={"/the-good-the-bad-the-ugly.gif"} alt={""} layout="fill" objectFit="cover" />
					</Poster>
					<span>
						{
							" Integer consectetur blandit feugiat. Suspendisse in sem viverra, tempus enim vel, rhoncus mauris. "
						}
					</span>
					<Poster>
						<Image src={"/the-good-the-bad-the-ugly.gif"} alt={""} layout="fill" objectFit="cover" />
					</Poster>
					<span>
						{
							" Integer consectetur blandit feugiat. Suspendisse in sem viverra, tempus enim vel, rhoncus mauris. "
						}
					</span>
				</p>
			</article>
		</section>
	);
};
