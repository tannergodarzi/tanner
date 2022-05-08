import React, { PropsWithChildren } from "react";

import styles from "./gridElement.module.css";

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
				className={styles.grid_element}
				style={{
					gridColumn: `${column} / span ${columnSpan}`,
					gridRow: `${row} / span ${rowSpan}`,
				}}
			>
				{children}
			</section>
		</>
	);
};
