import React from "react";
import Image from "next/image";
import Poster from "./poster";

import styles from "./hero.module.css";

export default function Hero() {
	return (
		<>
			<section className={styles.hero}>
				<article>
					<header>
						<h1>{`Howdy, I’m Tanner`}</h1>{" "}
					</header>
					<p>
						<span>{`— a real person on the internet.`}</span>
						<Poster>
							<Image src={"/gifs/skateboarder.gif"} alt={""} fill quality={50} />
						</Poster>
						<span>{`I’m also a Front End Engineer motivated by design thinking and story telling.`}</span>
						<Poster>
							<Image src={"/gifs/reading.gif"} alt={""} fill quality={50} />
						</Poster>
						<span>{"Currently I’m at Notion on Brand Marketing telling the story of tools for work."}</span>
						<Poster>
							<Image src={"/gifs/mission-control.gif"} alt={""} fill quality={50} />
						</Poster>
						<span>
							{`San Francisco — specifically the delightful neighborhood of Cole Valley — is where I call home.`}
						</span>
						<Poster>
							<Image src={"/gifs/california.gif"} alt={""} fill quality={50} />
						</Poster>
						<span>
							{
								"My favorite dish? Thanks for asking. I can’t deny the beauty of a Prosciutto di Parma Pie"
							}
						</span>
						<Poster>
							<Image src={"/gifs/fruit-plate.gif"} alt={""} fill quality={50} />
						</Poster>
					</p>
				</article>
			</section>
		</>
	);
};
