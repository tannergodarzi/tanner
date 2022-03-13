import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

interface TextProps {
	value: any;
}

export const Text = ({ value }: PropsWithChildren<TextProps>) => {
	return value.map((block) => {
		const { annotations, plaint_text, text } = block;

		const classes = classNames("text", {
			["text-bold"]: annotations.bold,
			[`text-color-${annotations.color}`]: annotations.color,
			["text-italic"]: annotations.italic,
			["text-strikethrough"]: annotations.strikethrough,
			["text-underline"]: annotations.underline,
			["text-code"]: annotations.code,
		});

		const genKey = uuidv4();

		return (
			<React.Fragment key={genKey}>
				<span className={classes}>
					{text.link ? (
						<a href={text.link.url}>{text.content}</a>
					) : !annotations.code ? (
						text.content
					) : (
						<code>{text.content}</code>
					)}
				</span>
				<style jsx>{`
					.text {
						font: inherit;
						display: inline;
						width: 100%;
					}
					.text-bold {
						font-weight: 700;
					}
					.text-italic {
						font-style: italic;
					}
					.text-strikethrough {
						text-decoration: line-through;
					}
					.text-underline {
						text-decoration: underline;
					}
					.text-underline.text-strikethrough {
						text-decoration: underline line-through;
					}
					.text-code {
						font: var(--font-annotation);
						background: rgba(255, 255, 255, 0.1);
						padding: 0.3em;
						border-radius: 0.4em;
					}
				`}</style>
			</React.Fragment>
		);
	});
};
