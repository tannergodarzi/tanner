import React from "react";
import Link from "next/link";

export const Navigation = () => {
	return (
		<>
			<section className={"mast"}>
				<span>{"Tanner"}</span>
				<nav>
					<Link href={"/"}>
						<a>{"Home"}</a>
					</Link>
					<Link href={"/blog"}>
						<a>{"Blog"}</a>
					</Link>
				</nav>
			</section>
			<style jsx>{`
				.mast {
					height: auto;
					position: sticky;
					display: flex;
					flex-direction: row;
					align-content: center;
					align-items: center;
					top: 0;
					max-width: 100%;
					box-sizing: border-box;
					padding: 0;
					margin: 0 1.5rem;
					background: var(--page-background);
					z-index: 1001;
					border-bottom: 1px solid rgba(0, 0, 0, 0.2);
				}
				.mast nav {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					align-items: center;
					justify-content: flex-end;
					box-sizing: border-box;
					width: 100%;
					height: 100%;
					gap: 1.25em;
					padding: 1em 0;
				}
				.mast * {
					text-decoration: none;
					font-weight: 400;
					font-size: 1rem;
					font-family: "adonis-web";
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
