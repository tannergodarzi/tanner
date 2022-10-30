import React from "react";
import Link from "next/link";

import styles from "./footer.module.css";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<footer className={styles.footer}>
				<header>{`Made by Tanner Godarzi ©${currentYear}`}</header>
				<nav>
					<ul>
						<li>
							<Link href={"/"}>{"Home"}</Link>
						</li>
						<li>
							<Link href={"/blog"}>{"Blog"}</Link>
						</li>
						<li>
							<Link href={"mailto:tanner.godarzi@gmail.com"}>{"Fan Mail"}</Link>
						</li>
						<li>
							<Link href={"https://glass.photo/tannergodarzi"}>{"Glass"}</Link>
						</li>
						<li>
							<Link href={"https://github.com/tannergodarzi"}>{"GitHub"}</Link>
						</li>
					</ul>
				</nav>
			</footer>
		</>
	);
};
