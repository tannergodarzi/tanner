import React from "react";
import Image from "next/image";
import Poster from "./poster";

import styles from "./hero.module.css";
import Link from "next/link";

export default function Hero() {
	return (
		<>
			<section className={styles.hero}>
				<article className={styles.heroText}>
					<header>
						<h1>{`Howdy friend, I’m Tanner`}</h1>{" "}
					</header>
					<p>
						<span>{`— a real person on the internet.`}</span>
						<Poster>
							<Image
								src={"/gifs/skateboarder.gif"}
								alt={""}
								quality={50}
								width={480}
								height={360}
								className={styles.posterImage}
							/>
						</Poster>
						<span>{`I’m also a Front End Engineer motivated by design thinking and story telling.`}</span>
						<Poster>
							<Image
								src={"/gifs/reading.gif"}
								alt={""}
								quality={50}
								className={styles.posterImage}
								width={384}
								height={288}
							/>
						</Poster>
						<span>{"Currently I’m at Notion on Brand Marketing telling the story of tools for work."}</span>
						<Poster>
							<Image
								src={"/gifs/mission-control.gif"}
								alt={""}
								quality={50}
								className={styles.posterImage}
								width={480}
								height={360}
							/>
						</Poster>
						<span>
							{"Occasionally I interview my pals at "}
							<Link href="https://dinnerwithfriendsclub.com/">{"Dinner With Friends"}</Link>
							{" about misadventures and chicken tenders."}
						</span>
						<Poster>
							<Image
								src={"/gifs/dinner-with-friends.gif"}
								alt={""}
								quality={50}
								className={styles.posterImage}
								width={900}
								height={900}
							/>
						</Poster>
						<span>
							{`San Francisco — specifically the delightful neighborhood of Cole Valley — is where I call home.`}
						</span>
						<Poster>
							<Image
								src={"/gifs/california.gif"}
								alt={""}
								quality={50}
								className={styles.posterImage}
								width={351}
								height={263}
							/>
						</Poster>
						<span>
							{
								"My favorite dish? Thanks for asking. I can’t deny the beauty of a Prosciutto di Parma Pie."
							}
						</span>
						<Poster>
							<Image
								src={"/gifs/fruit-plate.gif"}
								alt={""}
								quality={50}
								className={styles.posterImage}
								width={480}
								height={320}
							/>
						</Poster>
					</p>
				</article>
			</section>
		</>
	);
};
