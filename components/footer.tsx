import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<h6>{"©2021 All rights reserved"}</h6>
		</footer>
	);
};
