import React, { PropsWithChildren } from "react";
import styles from "./gridElement.module.css";

interface GridElementProps {
	column: number;
	columnSpan: number;
	row: number;
	rowSpan: number;
}

export const GridElement = ({ column, columnSpan, row, rowSpan, children }: PropsWithChildren<GridElementProps>) => {
	return (
		<section
			className={styles.gridElement}
			style={{
				gridColumn: `${column} / span ${columnSpan}`,
				gridRow: `${row} / span ${rowSpan}`,
			}}
		>
			{children}
		</section>
	);
};
