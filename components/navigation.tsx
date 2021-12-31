import React from "react";
import Link from "next/link";

export const Navigation = () => {
	return (
		<>
			<section className={"mast"}>
				<nav>
					<Link href={"/"}>
						<a>{"Home"}</a>
					</Link>
					<Link href={"/blog"}>
						<a>{"Blog"}</a>
					</Link>
					<Link href={"/about"}>
						<a>{"About"}</a>
					</Link>
				</nav>
			</section>
			<style jsx>{`
				.mast {
					height: auto;
					position: sticky;
					top: 0;
					width: 100%;
					box-sizing: border-box;
					padding: 0 1.5rem 0;
					margin: 0 auto;
					background: var(--page-background);
					z-index: 1001;
				}
				.mast nav {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					align-items: center;
					justify-content: flex-start;
					box-sizing: border-box;
					width: 100%;
					height: 100%;
					gap: 0.5em;
					padding: 0.5em 0 0.75em;
					border-bottom: 1px solid rgba(0, 0, 0, 0.2);
				}
				.mast nav a {
					text-decoration: none;
					font-weight: 400;
					font-size: 1rem;
					font-family: "ibm-plex-mono";
				}

				.mast nav a:last-of-type:after {
					display: none;
				}

				.mast nav a:hover {
					text-decoration: underline;
				}
			`}</style>
		</>
	);
};
