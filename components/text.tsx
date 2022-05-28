import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

import styles from "./text.module.css";

interface TextProps {
	value: any;
}

export default function Text({ value }: PropsWithChildren<TextProps>) {
	if (value === undefined || value.length === 0) {
		return null;
	}
	return value.map((block) => {
		const { annotations, text } = block;

		const classes = classNames(styles.text, {
			[styles.text_bold]: annotations.bold,
			[styles.text_italic]: annotations.italic,
			[styles.text_strikethrough]: annotations.strikethrough,
			[styles.text_underline]: annotations.underline,
			[styles.text_code]: annotations.code,
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
			</React.Fragment>
		);
	});
};
