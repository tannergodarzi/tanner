import "../styles/resets.css";
import "../styles/variables.css";
import "../styles/typography.css";
import "../styles/dwf.module.css";

import styles from "./_app.module.css";
import dwfStyles from "../styles/dwf.module.css";

import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../library/gtag";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import classNames from "classnames";

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
			<main
				className={classNames(styles.app, {
					[dwfStyles.page]: router.pathname.includes("dinner-with-friends"),
				})}
			>
				{/* Global Site Tag (gtag.js) - Google Analytics */}
				<Script
					strategy="afterInteractive"
					src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
				/>
				<Script
					id="gtag-init"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', '${gtag.GA_TRACKING_ID}', {
						page_path: window.location.pathname,
						});
					`,
					}}
				/>
				<Component {...pageProps} />
				<Analytics />
			</main>
		</>
	);
}

export default App;
