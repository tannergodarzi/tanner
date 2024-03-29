import React, { PropsWithChildren } from "react";

import styles from "./gridElement.module.css";

interface GridElementProps {
	column: number;
	columnSpan: number;
	row: number;
	rowSpan: number;
}

export default function GridElement({
	column,
	columnSpan = 1,
	row,
	rowSpan,
	children,
}: PropsWithChildren<GridElementProps>) {
	return (
		<>
			<section
				className={styles.gridElement}
				style={{
					gridColumn: `${column} / span ${columnSpan}`,
					gridRow: `${row} / span ${rowSpan}`,
					//fontSize: `${(16 / columnSpan) * 0.475}vw`,
				}}
			>
				{children}
			</section>
		</>
	);
};
