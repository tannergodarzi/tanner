import "../styles/resets.css";
import "../styles/variables.css";
import "../styles/typography.css";

import Head from "next/head";

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://use.typekit.net/wir7xtg.css" />
				<meta name="author" content="Tanner Godarzi" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default App;
