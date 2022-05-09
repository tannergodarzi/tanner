import { CMS, inferDatabaseSchema, richTextAsPlainText } from "@jitl/notion-api";
import path from "path";

import { Client } from "@notionhq/client";

export const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export const NotionPages = new CMS({
	database_id: process.env.NOTION_BLOG_DATABASE,
	notion, // API client we set up before
	schema: inferDatabaseSchema({
		// inferDatabaseSchema adds "name" where unspecified.
		Slug: { type: "url" },
		Active: { type: "checkbox" },
		Published: { type: "date" },
		Subtitle: { type: "rich_text" },
		Name: { type: "title" },
	}),
	slug: "Slug",
	visible: "Active",
	getFrontmatter: ({ page, properties, defaultFrontmatter: { slug } }) => {
		// Transform your DB properties to a format convinient to use in your
		// renderers. I convert Notion's rich text to plain text a lot.
		const props = {
			slug: properties.Slug,
			Active: properties.Active,
			Published: properties.Published,
			Subtitle: richTextAsPlainText(properties.Subtitle),
			Name: properties.Name,
		};

		return {
			...props,
			httpRoute: `/blog/${slug}`,
		};
	},
	cache: {
		directory: path.resolve(".next/notion-cache"),
	},
	assets: {
		directory: path.resolve("public/notion-assets"),
		downloadExternalAssets: true,
	},
});
