import React, { PropsWithChildren } from "react";

interface GridElementProps {
	column: number;
	columnSpan: number;
	row: number;
	rowSpan: number;
}

export const GridElement = ({ column, columnSpan, row, rowSpan, children }: PropsWithChildren<GridElementProps>) => {
	// Resize observer
	return (
		<>
			<section
				className={"grid-element"}
				style={{
					gridColumn: `${column} / span ${columnSpan}`,
					gridRow: `${row} / span ${rowSpan}`,
				}}
			>
				{children}
			</section>
			<style global jsx>{`
				.grid-element {
					box-sizing: border-box;
					position: relative;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-content: flex-start;
					align-items: flex-start;
					overflow: hidden;
					//background: rgba(255, 0, 0, 0.1);
					font-size: ${(16 / columnSpan) * 0.95}vw;
				}
				.grid-element * {
					font-size: 1em !important;
					line-height: 1.2em !important;
				}
			`}</style>
		</>
	);
};
