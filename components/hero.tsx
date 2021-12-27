import React from "react";
import styles from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
	return (
		<section className={styles.hero}>
			<article>
				<p className="omega">
					{`Howdy, I’m Tanner — a cowboy on the internet `}
					<span className={styles.poster}>
						<Image src={"/cowboy.jpg"} alt={""} height={1117} width={1117} layout="fill" />
					</span>
					{` — living in San Francisco `}
					<span className={styles.poster}>
						<Image src={"/cowboy.jpg"} alt={""} height={1117} width={1117} layout="fill" />
					</span>
					{" I’m A Front End Engineer telling the story of the future of work at Notion. "}
					<span className={styles.poster}>
						<Image src={"/cowboy.jpg"} alt={""} height={1117} width={1117} layout="fill" />
					</span>
					{" I love meeting new people over coffee. "}
					<span className={styles.poster}>
						<Image src={"/cowboy.jpg"} alt={""} height={1117} width={1117} layout="fill" />
					</span>
				</p>
			</article>
		</section>
	);
};
