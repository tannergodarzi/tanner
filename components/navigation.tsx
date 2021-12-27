import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./navigation.module.css";
import Link from "next/link";

interface NavigationProps {}

export const Navigation = ({}: PropsWithChildren<NavigationProps>) => {
	return (
		<section className={styles.mast}>
			<nav>
				<Link href={"/"}>
					<a>{"Home"}</a>
				</Link>
				<Link href={"/blog"}>
					<a>{"Writings"}</a>
				</Link>
				<Link href={"/about"}>
					<a>{"About"}</a>
				</Link>
			</nav>
		</section>
	);
};
