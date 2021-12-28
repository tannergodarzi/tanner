import { Client } from "@notionhq/client";

// Notion client
const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export const getNotionBlocks = async (block_id: string = process.env.NOTION_BLOG_PAGE) => {
	return (await notion.blocks.children
		.list({
			block_id: block_id,
		})
		.then((a) => a.results)
		.then((b) =>
			b.map((block) => {
				return block;
			})
		)) as Array<any>;
};

export const getNotionPage = async (page_id: string = process.env.NOTION_BLOG_PAGE) => {
	return await notion.pages.retrieve({
		page_id: page_id,
	});
};
