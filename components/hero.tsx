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
								src={"https://media.giphy.com/media/QyDfZ9KyINz6Tnoj02/giphy-downsized.gif"}
								alt={""}
								width={480}
								height={360}
								layout="fill"
								objectFit="cover"
								quality={75}
							/>
						</Poster>
						<span>{`I’m also a Front End Engineer motivated by design thinking and story telling.`}</span>
						<Poster>
							<Image
								src={"https://media.giphy.com/media/kvl2YhR110qsBrHid2/giphy-downsized.gif"}
								alt={""}
								width={480}
								height={360}
								layout="fill"
								objectFit="cover"
								quality={75}
							/>
						</Poster>
						<span>{"Currently I’m at Notion on Brand Marketing telling the story of tools for work."}</span>
						<Poster>
							<Image
								src={"https://media.giphy.com/media/dVo2DTg9dVNiBQrkN6/giphy-downsized.gif"}
								alt={""}
								width={480}
								height={360}
								layout="fill"
								objectFit="cover"
								quality={75}
							/>
						</Poster>
						<span>
							{`San Francisco — specifically the delightful neighborhood of Cole Valley — is where I call home.`}
						</span>
						<Poster>
							<Image
								src={"https://media.giphy.com/media/9Hn5DiVGb74klPp29s/giphy-downsized.gif"}
								alt={""}
								width={480}
								height={360}
								layout="fill"
								objectFit="cover"
								quality={75}
							/>
						</Poster>
						<span>
							{
								"My favorite dish? Thanks for asking. I can’t deny the beauty of a Prosciutto di Parma Pie"
							}
						</span>
						<Poster>
							<Image
								src={"https://media.giphy.com/media/JppxLdTyGoP4rpR0CD/giphy.gif"}
								alt={""}
								width={480}
								height={360}
								layout="fill"
								objectFit="cover"
								quality={75}
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
