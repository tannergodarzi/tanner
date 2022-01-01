import React from "react";
import Link from "next/link";

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<footer className={"footer"}>
				<header className={"footer-header"}>
					<h6>{`Made by Tanner Godarzi ©${currentYear}`}</h6>
				</header>
				<nav className={"footer-nav"}>
					<Link href={"/"}>
						<a>{"Home"}</a>
					</Link>
					<Link href={"/blog"}>
						<a>{"Blog"}</a>
					</Link>
					<Link href={"mailto:tanner.godarzi@gmail.com"}>
						<a>{"Fan Mail"}</a>
					</Link>
					<Link href={"https://twitter.com/tannergodarzi"}>
						<a>{"Twitter"}</a>
					</Link>
					<Link href={"https://glass.photo/tannergodarzi"}>
						<a>{"Glass"}</a>
					</Link>
					<Link href={"https://github.com/tannergodarzi"}>
						<a>{"GitHub"}</a>
					</Link>
					<Link href={"https://tannergodarzi.eth.xyz"}>
						<a>{"ETH"}</a>
					</Link>
					<Link href={"https://www.linkedin.com/in/tannergodarzi/"}>
						<a>{"LinkedIn"}</a>
					</Link>
				</nav>
			</footer>
			<style jsx>{`
				.footer {
					box-sizing: border-box;
					padding: 2.5rem;
					width: 100%;
					text-align: center;
					font: var(--font-annotation);
				}

				.footer-header {
					display: flex;
					flex-direction: column;
					gap: 0.25em;
					font: var(--font-annotation);
					font-weight: 400;
					margin-bottom: 0;
				}

				.footer-nav {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					column-gap: 0.5em;
					justify-content: center;
				}

				.footer-nav a {
					font-weight: 400;
					font-size: 0.6rem;
					text-decoration: none;
				}

				.footer-nav a:hover {
					text-decoration: underline;
				}

				.footer-nav a:after {
					content: "/";
					margin-left: 0.5em;
					text-decoration: none;
					pointer-events: none;
					cursor: default;
				}

				.footer-nav a:last-of-type:after {
					display: none;
				}
			`}</style>
		</>
	);
};
