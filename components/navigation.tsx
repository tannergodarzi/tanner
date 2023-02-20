import React from "react";
import Link from "next/link";

import styles from "./navigation.module.css";

export default function Navigation() {
	return (
		<>
			<section className={styles.mast}>
				<nav>
					<Link href={"/"}>{"Tanner"}</Link>
					<Link href={"/dinner-with-friends"}>{"Dinner With Friends"}</Link> |
					<Link href={"/about"}>{"About"}</Link>
					<Link href={"/blog"}>{"Blog"}</Link>
				</nav>
			</section>
		</>
	);
};
