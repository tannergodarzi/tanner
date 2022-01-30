import React from "react";
import Link from "next/link";

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<footer>
				<header>{`Made by Tanner Godarzi ©${currentYear}`}</header>
				<nav>
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
				</nav>
			</footer>
			<style jsx>{`
				footer {
					box-sizing: border-box;
					padding: 1rem 1rem 1.2rem;
					margin-top: 3rem;
					width: 100%;
					text-align: center;
				}
				footer * {
					font: var(--font-annotation);
					font-weight: 400;
					font-size: 0.6rem;
				}

				header {
					display: flex;
					flex-direction: column;
					gap: 0.25em;
					margin-bottom: 0;
				}

				nav {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					column-gap: 0.5em;
					justify-content: center;
				}

				nav a {
					font: inherit;
					text-decoration: none;
				}

				nav a:hover {
					text-decoration: underline;
				}

				nav a:after {
					content: "/";
					margin-left: 0.5em;
					text-decoration: none;
					pointer-events: none;
					cursor: default;
				}

				nav a:last-of-type:after {
					display: none;
				}
			`}</style>
		</>
	);
};
