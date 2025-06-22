import { Metadata } from "next";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import { GoogleTagManager } from "@next/third-parties/google";
import "../styles/global.css";

import styles from "./layout.module.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head>
				<meta charSet="UTF-8" />
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body>
				<Navigation />
				<main className={styles.layout}>{children}</main>
				<Footer />
			</body>
			<GoogleTagManager gtmId="G-TX0Y3FW0VE" />
		</html>
	);
}

export const metadata: Metadata = {
	title: "Hello, I'm Tanner — a real person on the internet.",
	description:
		"And a Front End Engineer motivated by design thinking and story telling.",
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
};
