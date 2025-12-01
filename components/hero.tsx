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
						<h1>{`Howdy friend, I’m Tanner. 🤠 `}</h1>
					</header>
					<p>
						<span>
							{`I'm a Front-End Engineer currently at `}
							<Link href="http://vercel.com/design">{`Vercel`}</Link>
							{` telling the story of better development on the web. 🌐 `}{" "}
						</span>
						<span>
							{"I made a fun way to have better connection at "}
							<Link href="https://www.conversationquest.app/">{"Conversation Quest."}</Link>
							{"💎 "}
						</span>
						<span>
							{"Occasionally I interview my pals at "}
							<Link href="https://dinnerwithfriendsclub.com/">{"Dinner With Friends"}</Link>
							{" about misadventures and chicken tenders. 🍲"}{" "}
						</span>
						<span>
							{"I even have an ambient noise podcast called "}
							<Link href="https://open.spotify.com/show/5uDwswaecZ42ZJvMblVZp7">
								{"Magical Ambient Sound Machine"}
							</Link>
							{" based on field recordings. Give it a listen. 🎤"}{" "}
						</span>
						<span>
							{"If a podcast isn’t your jam, you can subscribe to my Substack "}
							<Link href="http://tannergodarzi.substack.com">{"Tanner Thoughts"}</Link>
							{" too. ✍️"}{" "}
						</span>
						<span>
							{
								"San Francisco — specifically the delightful neighborhood of Cole Valley — is where I call home. 🌁 My favorite dish? Thanks for asking. I can’t deny the beauty of a Prosciutto di Parma Pie. 🍕"
							}
						</span>
					</p>
				</article>
			</section>
		</>
	);
}
