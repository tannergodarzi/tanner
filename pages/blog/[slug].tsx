import Head from "next/head";
import { Client } from "@notionhq/client";
import { Block } from "../../components/block";
import { PostData } from "../../helpers/notionTypes";

// Notion client
const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export async function getServerSideProps(context) {
	const queryResponse = await notion
		.search({
			query: context.params.slug,
		})
		.then((response) => response.results);
	// TODO: Handle query not returning anything
	const id = queryResponse[0].id;

	const pageResponse = await notion.pages.retrieve({ page_id: id }).then((response) => response as PostData);
	const blocksResponse = await notion.blocks.children
		.list({
			block_id: id,
		})
		.then((response) => response.results);

	const { created_time, last_edited_time, properties, cover, icon } = pageResponse;
	// TODO: Handle archived state as 404 or permanently deleted

	const pageTitle = properties.title.title[0].plain_text;
	const blocks = blocksResponse;
	const meta = { created_time, last_edited_time, cover, icon };
	return {
		props: {
			meta,
			pageTitle,
			blocks,
		},
	};
}

export default function Slug(props) {
	const { blocks, meta, pageTitle } = props;
	return (
		<>
			<Head>
				<title>Blog | {pageTitle}</title>
				<meta charSet="UTF-8" />
				<meta name="title" content={`Blog | ${pageTitle}`} />
				<meta
					name="description"
					content="a Front End Engineer living in San Francisco. I&rsquo;m
						currently at Notion telling the story of toolmaking for the
						future."
				/>
				<meta name="keywords" content="Tanner Godarzi, Tanner, Notion, Dropbox, black ops" />
				<meta name="author" content="Tanner Godarzi" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://use.typekit.net/wir7xtg.css" />
			</Head>

			<main>
				<article className={"article"}>
					<header className={"header"}>
						<h1>{pageTitle}</h1>
						<time dateTime={meta.created_time}>
							{`Published ${new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
								new Date(meta.created_time)
							)}`}
						</time>
					</header>
					<section>
						{blocks.map((block) => {
							return <Block block={block} key={block.id} />;
						})}
					</section>
				</article>
				<footer className="footer">
					<svg viewBox="0 0 41 10">
						<path
							fill="inherit"
							d="M6.6 1.104C6.6 0.719999 6.6 0.408 6.24 0.408C6.036 0.408 5.724 0.443999 5.58 0.443999H1.284C1.128 0.443999 0.828 0.408 0.612 0.408C0.264 0.408 0.264 0.719999 0.264 1.104C0.264 1.44 0.264 2.46 0.54 2.46C0.828 2.46 0.84 1.848 0.996 1.524C1.2 1.104 1.668 0.983999 2.148 0.983999H2.868V7.992C2.868 8.532 2.664 8.616 2.496 8.616C2.352 8.616 2.328 8.664 2.328 8.76C2.328 8.988 2.604 9 2.784 9H4.068C4.248 9 4.524 8.988 4.524 8.76C4.524 8.664 4.488 8.616 4.368 8.616C4.2 8.616 3.984 8.532 3.984 7.992V0.983999H4.704C5.184 0.983999 5.664 1.104 5.868 1.524C6.024 1.848 6.036 2.46 6.324 2.46C6.6 2.46 6.6 1.44 6.6 1.104ZM12.9032 8.7C12.9032 8.64 12.8672 8.544 12.7352 8.544C12.5672 8.544 12.4112 8.544 12.4112 7.968V4.812C12.4112 3.312 11.8232 2.976 10.8872 2.976C10.1792 2.976 9.25519 3.552 8.82319 4.368V0.887999C8.82319 0.648 8.82319 0.323999 8.54719 0.323999H7.79119C7.59919 0.323999 7.33519 0.383999 7.33519 0.611999C7.33519 0.696 7.37119 0.779999 7.49119 0.779999C7.70719 0.779999 7.82719 0.84 7.82719 1.356V7.968C7.82719 8.544 7.65919 8.544 7.49119 8.544C7.37119 8.544 7.33519 8.64 7.33519 8.7C7.33519 8.94 7.59919 9 7.77919 9H8.87119C9.11119 9 9.31519 8.94 9.31519 8.7C9.31519 8.64 9.27919 8.544 9.14719 8.544C8.97919 8.544 8.82319 8.544 8.82319 7.968V5.94C8.82319 4.896 9.41119 3.744 10.4552 3.744C11.2712 3.744 11.4152 4.356 11.4152 5.328V7.968C11.4152 8.544 11.2472 8.544 11.0792 8.544C10.9592 8.544 10.9232 8.64 10.9232 8.7C10.9232 8.94 11.1992 9 11.3672 9H12.4592C12.6992 9 12.9032 8.94 12.9032 8.7ZM18.7359 5.388C18.7359 4.02 17.9199 2.976 16.3719 2.976C14.8359 2.976 13.8159 4.092 13.8159 6.156C13.8159 8.112 14.8959 9.156 16.4079 9.156C17.4039 9.156 18.2319 8.688 18.6039 7.944C18.6519 7.86 18.6639 7.812 18.6639 7.692C18.6639 7.548 18.5439 7.476 18.4239 7.476C18.2919 7.476 18.1959 7.596 18.1479 7.68C17.7879 8.16 17.4039 8.496 16.6239 8.496C15.2799 8.496 14.8959 7.188 14.8959 6.048H18.2919C18.4959 6.048 18.7359 5.952 18.7359 5.388ZM17.6319 5.064C17.6319 5.436 17.5839 5.52 17.2359 5.52H15.1359C14.9439 5.52 14.9079 5.52 14.9079 5.292C14.9079 4.752 15.1359 3.492 16.3359 3.492C17.3319 3.492 17.6319 4.368 17.6319 5.064ZM28.0567 7.2C28.0567 7.116 28.0327 6.96 27.8887 6.96C27.7447 6.96 27.7087 7.008 27.6127 7.2C27.3487 7.716 27.1807 8.052 26.6047 8.268C26.3527 8.364 25.9207 8.4 25.5007 8.4H24.3967C24.2047 8.4 24.1687 8.364 24.1687 7.98V4.8L25.5007 4.86C25.9327 4.884 26.3767 4.908 26.4967 4.908C26.6647 4.908 26.9527 4.908 26.9527 4.56C26.9527 4.356 26.9407 4.14 26.6047 4.14C26.4727 4.14 26.0647 4.176 25.9207 4.188L24.1687 4.308V1.368C24.1687 1.032 24.2767 0.983999 24.5407 0.983999H25.7167C26.1967 0.983999 26.6647 1.104 26.8687 1.524C27.0247 1.848 27.0487 2.46 27.3367 2.46C27.6127 2.46 27.6127 1.44 27.6127 1.104C27.6127 0.719999 27.6007 0.408 27.2407 0.408C27.0367 0.408 26.7247 0.443999 26.5687 0.443999H22.9807C22.7767 0.443999 22.5127 0.456 22.5127 0.684C22.5127 0.767999 22.5487 0.827999 22.6807 0.827999C22.8487 0.827999 23.0527 0.912 23.0527 1.452V7.98C23.0527 8.52 22.8367 8.616 22.6687 8.616C22.5607 8.616 22.5127 8.664 22.5127 8.76C22.5127 8.988 22.7887 9 22.9687 9H26.9887C27.6487 9 27.7087 8.82 27.8887 8.16C28.0327 7.656 28.0567 7.38 28.0567 7.2ZM30.2571 3.72C30.2571 3.36 30.2211 3.168 29.9811 3.168H29.2011C29.0211 3.168 28.7571 3.228 28.7571 3.456C28.7571 3.54 28.7931 3.624 28.9131 3.624C29.1051 3.624 29.2491 3.648 29.2491 4.212V7.968C29.2491 8.544 29.0811 8.544 28.9131 8.544C28.7931 8.544 28.7571 8.64 28.7571 8.7C28.7571 8.94 29.0211 9 29.2011 9H30.2931C30.5331 9 30.7371 8.94 30.7371 8.7C30.7371 8.64 30.7011 8.544 30.5691 8.544C30.4011 8.544 30.2451 8.544 30.2451 7.968V5.94C30.2451 4.812 30.8811 3.744 31.8771 3.744C32.8131 3.744 32.8371 4.584 32.8371 5.328V7.968C32.8371 8.544 32.6691 8.544 32.5011 8.544C32.3811 8.544 32.3451 8.64 32.3451 8.7C32.3451 8.94 32.6211 9 32.7891 9H33.8811C34.1211 9 34.3251 8.94 34.3251 8.7C34.3251 8.64 34.2891 8.544 34.1571 8.544C33.9891 8.544 33.8331 8.544 33.8331 7.968V4.812C33.8331 3.492 33.4371 2.976 32.3091 2.976C31.6011 2.976 30.7251 3.516 30.2451 4.368C30.2571 4.176 30.2571 3.996 30.2571 3.72ZM39.2578 6.84C39.2578 7.884 38.5258 8.496 37.8418 8.496C37.2538 8.496 36.3058 8.208 36.3058 5.976C36.3058 4.068 37.1098 3.54 37.8418 3.54C38.5378 3.54 39.2578 3.912 39.2578 5.028V6.84ZM40.2538 0.887999C40.2538 0.648 40.2538 0.323999 39.9778 0.323999H39.2218C39.0298 0.323999 38.7658 0.383999 38.7658 0.611999C38.7658 0.696 38.8018 0.779999 38.9218 0.779999C39.1378 0.779999 39.2578 0.84 39.2578 1.356V3.624C38.9338 3.12 38.2618 2.976 37.7338 2.976C36.7858 2.976 35.2378 3.516 35.2378 6.168C35.2378 8.436 36.4018 9.156 37.4698 9.156C38.2378 9.156 38.8378 8.76 39.2578 8.052C39.2578 8.652 39.2698 9 39.5098 9H40.2778C40.4818 9 40.7458 8.964 40.7458 8.724C40.7458 8.616 40.7338 8.544 40.5178 8.544C40.3858 8.544 40.2538 8.436 40.2538 8.064V0.887999Z"
						/>
					</svg>
				</footer>
			</main>
			<style jsx>{`
				main {
					position: relative;
					padding-bottom: min(calc(0.25 * 940px + 4rem), calc(0.25 * 100vw + 4rem));
				}
				.article,
				.footer {
					flex-direction: column;
					width: min(100%, 1040px);
					box-sizing: border-box;
					padding: 0 max(1rem, 2rem);
					margin: 2rem auto;
				}
				.article {
					background: var(--page-background);
					z-index: 1;
					position: relative;
					padding-bottom: 2rem;
				}
				.header {
					margin-bottom: 1rem;
					font-size: 0.75rem;
					text-align: center;
				}
				.header time {
					line-height: 1em;
					font-family: monospace;
				}
				.header h1 {
					margin-bottom: 0.25rem;
				}
				.footer {
					fill: var(--text-color);
					margin: 4rem auto;
					text-align: center;
					position: fixed;
					bottom: 0;
					left: 0;
					right: 0;
					z-index: 0;
				}
				.footer svg {
					display: block;
					width: 100%;
				}
				.footer text {
					font-family: inherit;
				}
			`}</style>
		</>
	);
}
