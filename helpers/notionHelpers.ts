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
						text: {
							equals: identifier,
						},
					},
				],
			},
		})
		.then((a) => a.results[0]);
}

export async function getNotionDatabase(database_id: string = process.env.NOTION_BLOG_DATABASE) {
	return await notion.databases
		.query({
			database_id,
			sorts: [{ property: "Published", direction: "descending" }],
			filter: {
				and: [
					{
						property: "Name",
						text: {
							is_not_empty: true,
						},
					},
					{
						property: "Slug",
						text: {
							is_not_empty: true,
						},
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
