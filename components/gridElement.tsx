import React, { PropsWithChildren } from "react";

interface GridElementProps {
	column: number;
	columnSpan: number | "auto";
	row: number;
	rowSpan: number | "auto";
}

export const GridElement = ({ column, columnSpan, row, rowSpan, children }: PropsWithChildren<GridElementProps>) => {
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
			<style jsx>{`
				.grid-element {
					box-sizing: border-box;
					position: relative;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-content: flex-start;
					align-items: flex-start;
					overflow: hidden;
				}
			`}</style>
		</>
	);
};
