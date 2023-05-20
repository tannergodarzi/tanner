import "../styles/resets.css";
import "../styles/variables.css";
import "../styles/typography.css";

import styles from "./_app.module.css";

import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }) {
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
