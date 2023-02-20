import Head from "next/head";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { getNotionDatabase } from "../../helpers/notionHelpers";

export async function getStaticProps() {
	const database = await getNotionDatabase({ database_id: process.env.NOTION_BLOG_DATABASE, page_size: 100 });
	return {
		props: {
			database,
		},
		revalidate: 60,
	};
}

export default function Index({ database }) {
	return (
		<>
			<Head>
				<title>Dinner With Friends</title>
			</Head>
			<Navigation />
			<section></section>
			<Footer />
		</>
	);
}
