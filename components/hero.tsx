import React, { PropsWithChildren, useEffect, useState } from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

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
					<span>{`Howdy, I’m Tanner — a real person on the internet.`}</span>
					<Poster>
						<Image
							src={"https://media.giphy.com/media/xs7bOB7WyxnnQ9d0CS/giphy.gif"}
							alt={""}
							layout="fill"
							objectFit="cover"
						/>
					</Poster>

					<span>{`I’m a Front End Engineer motivated by design thinking and story telling.`}</span>
					<Poster>
						<Image
							src={"https://media.giphy.com/media/sk6yL9EGVeAcE/giphy.gif"}
							alt={""}
							layout="fill"
							objectFit="cover"
						/>
					</Poster>
					<span>{"Currently I’m at Notion on Brand Marketing telling the story of tools for work."}</span>
					<Poster>
						<Image src={"/notion-office.jpg"} alt={""} layout="fill" objectFit="cover" />
					</Poster>
					<span>
						{`San Francisco — specifically the delightful neighborhood of Cole Valley — is where I call home.`}
					</span>
					<Poster>
						<Image
							src={"https://media.giphy.com/media/9ViAEnNgtuDUnVcfgi/giphy.gif"}
							alt={""}
							layout="fill"
							objectFit="cover"
						/>
					</Poster>
					<span>{"My favorite dish? Thanks for asking. I can’t deny the beauty of a Cacio e Pepe"}</span>
					<Poster>
						<Image
							src={"https://media.giphy.com/media/3o7bugOn9JDdvolbxu/giphy.gif"}
							alt={""}
							layout="fill"
							objectFit="cover"
						/>
					</Poster>
				</p>
			</article>
		</section>
	);
};
