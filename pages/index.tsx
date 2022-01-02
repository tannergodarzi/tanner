import Head from "next/head";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Navigation } from "../components/navigation";

export default function Index() {
	return (
		<>
			<Head>
				<title>Howdy, I&rsquo;m Tanner &mdash; a real person on the internet.</title>
				<meta name="title" content="Howdy, I’m Tanner — a real person on the internet." />
				<meta
					name="description"
					content="I’m also a Front End Engineer motivated by design thinking and story telling."
				/>
			</Head>
			<Navigation />
			<Hero />
			<Footer />
		</>
	);
}
