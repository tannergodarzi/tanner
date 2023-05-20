import "../styles/resets.css";
import "../styles/variables.css";
import "../styles/typography.css";

import styles from "./_app.module.css";

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../library/gtag";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<main className={styles.app}>
				<Component {...pageProps} />
			</main>
			<Analytics />
		</>
	);
}

export default App;
