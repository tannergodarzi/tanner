import Block from "../../components/block";
import { checkForChildBlocks, getNotionPage, getNotionBlocks } from "../../helpers/notionHelpers";

import styles from "./about.module.css";

export default async function AboutPage() {
	if (!process.env.NOTION_ABOUT_PAGE) { 
		throw new Error("process.env.NOTION_ABOUT_PAGE not found!");
	}
	const page = await getNotionPage(process.env.NOTION_ABOUT_PAGE);
	const unparsedBlocks = await getNotionBlocks(page.id).then((a) => a.map(checkForChildBlocks));
	const blocks = await Promise.all(unparsedBlocks);

	return (
		<article className={styles.about}>
			{blocks.map((block) => {
				return <Block block={block} key={block.id} />;
			})}
		</article>
	);
}
