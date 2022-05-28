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
							<Link href={"/"}>
								<a>{"Home"}</a>
							</Link>
						</li>
						<li>
							<Link href={"/blog"}>
								<a>{"Blog"}</a>
							</Link>
						</li>
						<li>
							<Link href={"/rss"}>
								<a>{"RSS"}</a>
							</Link>
						</li>
						<li>
							<Link href={"mailto:tanner.godarzi@gmail.com"}>
								<a>{"Fan Mail"}</a>
							</Link>
						</li>
						<li>
							<Link href={"https://twitter.com/tannergodarzi"}>
								<a>{"Twitter"}</a>
							</Link>
						</li>
						<li>
							<Link href={"https://glass.photo/tannergodarzi"}>
								<a>{"Glass"}</a>
							</Link>
						</li>
						<li>
							<Link href={"https://github.com/tannergodarzi"}>
								<a>{"GitHub"}</a>
							</Link>
						</li>
					</ul>
				</nav>
			</footer>
		</>
	);
};
