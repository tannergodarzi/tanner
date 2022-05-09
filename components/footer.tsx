import React from "react";
import Link from "next/link";

import styles from "./footer.module.css";

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<footer className={styles.footer}>
				<header>{`Made by Tanner Godarzi ©${currentYear}`}</header>
				<nav>
					<Link href={"/"}>
						<a>{"Home"}</a>
					</Link>
					<Link href={"/blog"}>
						<a>{"Blog"}</a>
					</Link>
					<Link href={"/rss"}>
						<a>{"RSS"}</a>
					</Link>
					<Link href={"mailto:tanner.godarzi@gmail.com"}>
						<a>{"Fan Mail"}</a>
					</Link>
					<Link href={"https://twitter.com/tannergodarzi"}>
						<a>{"Twitter"}</a>
					</Link>
					<Link href={"https://glass.photo/tannergodarzi"}>
						<a>{"Glass"}</a>
					</Link>
					<Link href={"https://github.com/tannergodarzi"}>
						<a>{"GitHub"}</a>
					</Link>
				</nav>
			</footer>
		</>
	);
};
