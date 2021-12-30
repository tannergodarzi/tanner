import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<header className={styles.footerHeader}>
				<h6>{`Written, designed, and built by Tanner Godarzi. © ${currentYear}`}</h6>
			</header>
			<nav className={styles.footerNav}>
				<Link href={"/"}>
					<a>{"Home"}</a>
				</Link>
				<Link href={"/blog"}>
					<a>{"Writings"}</a>
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
				<Link href={"https://tannergodarzi.eth.xyz"}>
					<a>{"ETH"}</a>
				</Link>
				<Link href={"https://www.linkedin.com/in/tannergodarzi/"}>
					<a>{"LinkedIn"}</a>
				</Link>
			</nav>
		</footer>
	);
};
