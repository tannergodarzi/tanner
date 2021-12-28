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
					<span>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</span>
					<Poster>
						<Image src={"/the-good-the-bad-the-ugly.gif"} alt={""} layout="fill" objectFit="cover" />
					</Poster>

					<span>{` Praesent faucibus nisi libero. `}</span>
					<Poster>
						<Image src={"/san-francisco.jpg"} alt={""} layout="fill" objectFit="cover" />
					</Poster>
					<span>{" Cras auctor accumsan erat, id ornare quam rutrum nec. "}</span>
					<Poster>
						<Image src={"/notion-office.jpg"} alt={""} layout="fill" />
					</Poster>
					<span>
						{
							" Suspendisse sollicitudin, tellus vitae convallis rutrum, dolor metus imperdiet quam, sit amet varius nibh ipsum at sapien. "
						}
					</span>
					<Poster>
						<Image src={"/clint-eastwood.gif"} alt={""} layout="fill" objectFit="cover" />
					</Poster>
				</p>
			</article>
		</section>
	);
};
