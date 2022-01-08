import React from "react";
import Image from "next/image";
import Poster from "./poster";
export const Hero = () => {
	return (
		<>
			<article className="hero">
				<section className="hero-text">
					<h1>{`Howdy, I’m Tanner`}</h1>{" "}
					<p>
						<span>{`— a real person on the internet.`}</span>
						<Poster>
							<Image
								src={"/gifs/skateboarder.gif"}
								alt={""}
								layout="fill"
								objectFit="cover"
								quality={50}
							/>
						</Poster>
						<span>{`I’m also a Front End Engineer motivated by design thinking and story telling.`}</span>
						<Poster>
							<Image src={"/gifs/reading.gif"} alt={""} layout="fill" objectFit="cover" quality={50} />
						</Poster>
						<span>{"Currently I’m at Notion on Brand Marketing telling the story of tools for work."}</span>
						<Poster>
							<Image
								src={"/gifs/mission-control.gif"}
								alt={""}
								layout="fill"
								objectFit="cover"
								quality={50}
							/>
						</Poster>
						<span>
							{`San Francisco — specifically the delightful neighborhood of Cole Valley — is where I call home.`}
						</span>
						<Poster>
							<Image src={"/gifs/california.gif"} alt={""} layout="fill" objectFit="cover" quality={50} />
						</Poster>
						<span>
							{
								"My favorite dish? Thanks for asking. I can’t deny the beauty of a Prosciutto di Parma Pie"
							}
						</span>
						<Poster>
							<Image
								src={"/gifs/fruit-plate.gif"}
								alt={""}
								layout="fill"
								objectFit="cover"
								quality={50}
							/>
						</Poster>
					</p>
				</section>
			</article>
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
