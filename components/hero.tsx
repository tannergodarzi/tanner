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
						<h1>{`Hello friend, I’m Tanner. 🤠 `}</h1>
					</header>
					<p>
						<span>
							{`I'm A Front-End Engineer currently at `}
							<Link href="https://www.conversationquest.app/">{`Vercel`}</Link>
							{` telling the story of better Development on the Web. 🌐 `}{" "}
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
							{
								"San Francisco — specifically the delightful neighborhood of Cole Valley — is where I call home. 🌁 My favorite dish? Thanks for asking. I can’t deny the beauty of a Prosciutto di Parma Pie. 🍕"
							}
						</span>
					</p>
				</article>
				<div className={styles.grid}>
					{/** 1 */}
					<span
						style={
							{
								"--grid-column": 4,
								"--grid-row": 1,
							} as React.CSSProperties
						}
					>
						{"🤠"}
					</span>
					{/** 2 */}
					<span
						style={
							{
								"--grid-column": 3,
								"--grid-row": 2,
							} as React.CSSProperties
						}
					>
						{"🤠"}
					</span>
					<span
						style={
							{
								"--grid-column": 4,
								"--grid-row": 2,
							} as React.CSSProperties
						}
					>
						{"🤠"}
					</span>
					<span
						style={
							{
								"--grid-column": 5,
								"--grid-row": 2,
							} as React.CSSProperties
						}
					>
						{"🤠"}
					</span>
					{/** 3 */}
					<span
						style={
							{
								"--grid-column": 2,
								"--grid-row": 3,
								transform: "translateX(50%)",
							} as React.CSSProperties
						}
					>
						{"🤠"}
					</span>
					<span
						style={
							{
								"--grid-column": 4,
								"--grid-row": 3,
							} as React.CSSProperties
						}
					>
						{"🤠"}
					</span>
					<span
						style={
							{
								"--grid-column": 6,
								"--grid-row": 3,
								transform: "translateX(-50%)",
							} as React.CSSProperties
						}
					>
						{"🤠"}
					</span>
					{/** 4 */}
					<span
						style={
							{
								"--grid-column": 2,
								"--grid-row": 4,
							} as React.CSSProperties
						}
					>
						{"👇"}
					</span>
					<span
						style={
							{
								"--grid-column": 3,
								"--grid-row": 4,
								transform: "translateX(50%)",
							} as React.CSSProperties
						}
					>
						{"🤠"}
					</span>
					<span
						style={
							{
								"--grid-column": 5,
								"--grid-row": 4,
								transform: "translateX(-50%)",
							} as React.CSSProperties
						}
					>
						{"🤠"}
					</span>
					<span
						style={
							{
								"--grid-column": 6,
								"--grid-row": 4,
							} as React.CSSProperties
						}
					>
						{"👇"}
					</span>
					{/** 5 */}
					<span
						style={
							{
								"--grid-column": 3,
								"--grid-row": 5,
								transform: "translateX(25%)",
							} as React.CSSProperties
						}
					>
						{"🤠"}
					</span>
					<span
						style={
							{
								"--grid-column": 5,
								"--grid-row": 5,
								transform: "translateX(-25%)",
							} as React.CSSProperties
						}
					>
						{"🤠"}
					</span>
					{/** 6 */}
					<span
						style={
							{
								"--grid-column": 3,
								"--grid-row": 6,
							} as React.CSSProperties
						}
					>
						{"🤠"}
					</span>
					<span
						style={
							{
								"--grid-column": 5,
								"--grid-row": 6,
							} as React.CSSProperties
						}
					>
						{"🤠"}
					</span>
					{/** 6 */}
					<span
						style={
							{
								"--grid-column": 3,
								"--grid-row": 7,
							} as React.CSSProperties
						}
					>
						{"👢"}
					</span>
					<span
						style={
							{
								"--grid-column": 5,
								"--grid-row": 7,
							} as React.CSSProperties
						}
					>
						{"👢"}
					</span>
				</div>
			</section>
		</>
	);
}
