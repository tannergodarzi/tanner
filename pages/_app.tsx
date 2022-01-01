import "../styles/resets.css";
import "../styles/variables.css";
import "../styles/typography.css";

import Head from "next/head";

function App({ Component, pageProps }) {
	return (
		<>

			<Component {...pageProps} />
		</>
	);
}

export default App;
