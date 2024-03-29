import { getNotionBlogDatabase } from "../../helpers/notionHelpers";

export const dynamic = "force-dynamic"; // defaults to force-static
export async function GET(request: Request) {
	const database = await getNotionBlogDatabase({ page_size: 100 });

	let rssItemsXml = "";
	let latestPostDate = "";
	database.map((node: any) => {
		const post = node.properties;
		const postDate = Date.parse(post.Published.date);
		const postHref = `https://www.tannergodarzi.com/blog/${post.Slug.url}`;

		if (!latestPostDate || postDate > Date.parse(post.Published.date.start)) {
			latestPostDate = new Date(post.Published.date.start).toUTCString();
		}

		rssItemsXml += `
          <item>
            <title><![CDATA[${post.Name.title[0].text.content}]]></title>
            <link>${postHref}</link>
            <pubDate>${new Date(post.Published.date.start).toUTCString()}</pubDate>
            <guid isPermaLink="false">${postHref}</guid>
            <description>
            <![CDATA[${post.Subtitle.rich_text[0].plain_text}]]>
            </description>
        </item>`;
	});
	const processedXml = `<?xml version="1.0" ?>
      <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
            <atom:link href="https://tannergodarzi.com/rss" rel="self" type="application/rss+xml" />
            <title><![CDATA[Tanner Godarzi]]></title>
            <link>https://www.tannergodarzi.com/blog</link>
            <description>
              <![CDATA[Howdy friend, I’m Tanner. These are thoughts and ramblings about technology and its cultural impact. Occasionally observations of our world are laced in.]]>
            </description>
            <language>en-us</language>
            <copyright>${new Date().getFullYear()} All rights reserved.</copyright>
            <lastBuildDate>${latestPostDate}</lastBuildDate>
            ${rssItemsXml}
        </channel>
      </rss>`;

	return new Response(processedXml, {
		headers: {
			"Content-Type": "application/atom+xml; charset=utf-8",
		},
	});
}
