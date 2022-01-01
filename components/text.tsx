import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./text.module.css";

interface TextProps {
	value: any;
}

function prepend(value, array) {
	var newArray = array.slice();
	newArray.unshift(value);
	return newArray;
}

export const Text = ({ value }: PropsWithChildren<TextProps>) => {
	return value.map((block) => {
		const { annotations, plain_text, text } = block;

		if (text.link) {
			return (
				<a
					href={text.link.url}
					className={classNames(styles.text, {
						[styles.text_bold]: annotations.bold,
						[styles[`text_color_${annotations.color}`]]: annotations.color,
						[styles.text_italic]: annotations.italic,
						[styles.text_strikethrough]: annotations.strikethrough,
						[styles.text_underline]: annotations.underline,
					})}
				>
					{text.content}
				</a>
			);
		}

		let wrappedElement = [text.content];

		if (annotations.bold) {
			wrappedElement = prepend(`<b>`, wrappedElement);
			wrappedElement.push(`</b>`);
		}

		if (annotations.strikethrough) {
			wrappedElement = prepend(`<s>`, wrappedElement);
			wrappedElement.push(`</s>`);
		}

		if (annotations.italic) {
			wrappedElement = prepend(`<em>`, wrappedElement);
			wrappedElement.push(`</em>`);
		}

		if (annotations.underline) {
			wrappedElement = prepend(`<u>`, wrappedElement);
			wrappedElement.push(`</u>`);
		}

		if (annotations.code) {
			wrappedElement = prepend(`<code>`, wrappedElement);
			wrappedElement.push(`</code>`);
		}

		return (
			<>
				<span
					key={plain_text}
					className={classNames(styles.text, {
						["text-bold"]: annotations.bold,
						[styles[`text_color_${annotations.color}`]]: annotations.color,
						[styles.text_italic]: annotations.italic,
						[styles.text_strikethrough]: annotations.strikethrough,
						[styles.text_underline]: annotations.underline,
					})}
					dangerouslySetInnerHTML={{ __html: wrappedElement.join("") }}
				/>
				<style jsx>{`
					span {
						display: inline;
						width: 100%;
					}
					.text {
					}
					.text-bold {
						font-weight: 700;
					}
				`}</style>
			</>
		);
	});
};
