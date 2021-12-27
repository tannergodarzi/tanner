import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<h6>{"Made with love in San Francisco"}</h6>
		</footer>
	);
};
