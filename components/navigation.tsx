import React from "react";
import Link from "next/link";

import styles from "./navigation.module.css";

export default function Navigation() {
	return (
		<>
			<section className={styles.mast}>
				<nav>
					<Link href={"/"}>
						<a>{"Tanner"}</a>
					</Link>
					<Link href={"/about"}>
						<a>{"About"}</a>
					</Link>
					<Link href={"/blog"}>
						<a>{"Blog"}</a>
					</Link>
				</nav>
			</section>
		</>
	);
};
