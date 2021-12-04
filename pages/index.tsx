import Head from "next/head";
import styles from "../styles/pages/index.module.css";

export default function Index() {
	return (
		<>
			<Head>
				<title>Tanner Godarzi</title>
				<meta charSet="UTF-8" />
				<meta name="description" content="Hi and hello — I'm Tanner" />
				<meta name="keywords" content="Tanner Godarzi, Tanner, Notion, Dropbox, black ops" />
				<meta name="author" content="Tanner Godarzi" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}></main>
		</>
	);
}
