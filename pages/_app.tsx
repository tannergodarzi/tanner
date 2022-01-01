import "../styles/resets.css";
import "../styles/variables.css";
import "../styles/typography.css";

import Head from "next/head";

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default App;
