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
		<>
			<section className="hero">
				<article className="hero-text">
					<h1>{`Howdy, I’m Tanner`}</h1> <span>{`— a real person on the internet.`}</span>
					<Poster>
						<Image
							src={"https://media.giphy.com/media/xs7bOB7WyxnnQ9d0CS/giphy.gif"}
							alt={""}
							layout="fill"
							objectFit="cover"
						/>
					</Poster>
					<span>{`I’m also a Front End Engineer motivated by design thinking and story telling.`}</span>
					<Poster>
						<Image
							src={"https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif"}
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
							src={"https://media.giphy.com/media/4GmVM1KT157CfsP5AY/giphy-downsized-large.gif"}
							alt={""}
							layout="fill"
							objectFit="cover"
						/>
					</Poster>
					<span>
						{"My favorite dish? Thanks for asking. I can’t deny the beauty of a Prosciutto di Parma Pie"}
					</span>
					<Poster>
						<Image
							src={"https://media.giphy.com/media/4ayiIWaq2VULC/giphy.gif"}
							alt={""}
							layout="fill"
							objectFit="cover"
						/>
					</Poster>
				</article>
			</section>
			<style jsx>{`
				.hero {
					box-sizing: border-box;
					width: 100%;
					padding: 1.5rem;
					z-index: 1000;
					position: relative;
				}
				.hero-text,
				.hero-text * {
					z-index: 0;
					position: relative;
					pointer-events: none;
					font: var(--font-display);
					font-size: clamp(2.25rem, 1.7996rem + 1.8909vw, 3.75rem);
					display: inline;
					letter-spacing: -0.02em;
					font-weight: 400;
					word-break: break-word;
					overflow-wrap: break-word;
					hyphens: auto;
				}
			`}</style>
		</>
	);
};
