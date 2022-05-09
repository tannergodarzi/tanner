import { Client } from "@notionhq/client";

// Notion client
const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export async function getEntryFromNotionDatabase(identifier: string) {
	return await notion.databases
		.query({
			database_id: process.env.NOTION_BLOG_DATABASE,
			filter: {
				and: [
					{
						property: "Slug",
						url: {
							equals: identifier,
						},
					},
				],
			},
		})
		.then((a) => a.results[0]);
}

export async function getNotionDatabase({ database_id = process.env.NOTION_BLOG_DATABASE, page_size = 100 }) {
	return await notion.databases
		.query({
			database_id: database_id,
			sorts: [{ property: "Published", direction: "descending" }],
			page_size: page_size,
			filter: {
				and: [
					{
						property: "Name",
						title: {
							is_not_empty: true,
						},
						type: "title",
					},
					{
						property: "Slug",
						url: {
							is_not_empty: true,
						},
						type: "url",
					},
					{
						property: "Published",
						date: {
							is_not_empty: true,
						},
					},
					{
						property: "Active",
						checkbox: {
							equals: true,
						},
					},
				],
			},
		})
		.then((a) => a.results);
}

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

export const checkForChildBlocks = async (block) => {
	if (block.has_children) {
		if (block.type === "column_list") {
			// Column
			const response: any = await getNotionBlocks(block.id);
			block.column_list = response;
			// Blocks
			for (let index in block.column_list) {
				if (block.column_list[index].has_children) {
					block.column_list[index].column = await getNotionBlocks(response[index].id);
				}
			}
		}
		return block;
	}
	return block;
};
