import React, { PropsWithChildren } from "react";

import styles from "./gridElement.module.css";

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
				className={styles.grid_element}
				style={{
					gridColumn: `${column} / span ${columnSpan}`,
					gridRow: `${row} / span ${rowSpan}`,
					fontSize: `${(16 / columnSpan) * 0.95}vw`
				}}
			>
				{children}
			</section>
		</>
	);
};
