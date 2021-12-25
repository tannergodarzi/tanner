import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./text.module.css";

interface TextProps {
	value: any;
}

export const Text = ({ value }: PropsWithChildren<TextProps>) => {
	return value.text.map((block) => {
		const { annotations, plain_text, text } = block;

		return (
			<span
				key={plain_text}
				className={classNames(styles.text, {
					[styles.text_bold]: annotations.bold,
					[styles.text_code]: annotations.code,
					[styles[`text_color_${annotations.color}`]]: annotations.color,
					[styles.text_italic]: annotations.italic,
					[styles.text_strikethrough]: annotations.strikethrough,
					[styles.text_underline]: annotations.underline,
				})}
			>
				{text.content}
			</span>
		);
	});
};
