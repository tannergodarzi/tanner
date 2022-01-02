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
			<main>
				<Component {...pageProps} />
			</main>
			<style jsx>{`
				main {
					min-height: 100vh;
					display: flex;
					flex-direction: column;
					position: relative;
				}
			`}</style>
		</>
	);
}

export default App;
