import React from "react";
import styles from "./navigation.module.css";
import Link from "next/link";

export const Navigation = () => {
	return (
		<section className={styles.mast}>
			<nav>
				<Link href={"/"}>
					<a>{"Home"}</a>
				</Link>
				<Link href={"/blog"}>
					<a>{"Writings"}</a>
				</Link>
			</nav>
		</section>
	);
};
