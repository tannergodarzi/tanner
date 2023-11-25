import { Metadata } from "next";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import { Analytics } from "@vercel/analytics/react";

import styles from "./layout.module.css";

import "../styles/resets.css";
import "../styles/variables.css";
import "../styles/typography.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				<Navigation />
				<main className={styles.layout}>{children}</main>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}

export const metadata: Metadata = {
	title: "Howdy, I'm Tanner — a real person on the internet.",
	description:
		"I’m also a Front End Engineer motivated by design thinking and story telling. Currently I’m at Notion telling the story of tools for work.",
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
};
