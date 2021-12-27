import React from "react";
import styles from "./hero.module.css";
import Link from "next/link";

export const Hero = () => {
	return (
		<section className={styles.hero}>
			<article>
				<p className="omega">
					<h1>{"Howdy, I’m Tanner — a cowboy on the internet — living in San Francisco, CA."} </h1>
					{
						"I’m A Front End Engineer telling the story of work tools at Notion. I love meeting new people over coffee."
					}
				</p>
			</article>
		</section>
	);
};
