import React from "react";
import styles from "./grid.module.css";

export default function Grid({ children }) {
	return (
		<>
			<section className={styles.grid}>{children}</section>
			<style global jsx>{`
				@media (min-width: 768px) {
					.grid {
						display: grid;
						grid-template-columns: repeat(16, calc(100vw / 16 - 1rem));
						grid-template-rows: repeat(32, calc(100vw / 16 - 1rem));
						gap: 1rem;
						max-width: (2rem - 100vw);
						margin: auto;
						margin-top: 5vh;
					}
				}

				@media (max-width: 768px) {
					.grid {
						display: flex;
						flex-direction: column;
						padding: 1rem;
					}
				}
				.circle {
					color: var(--text-color);
					border: 2px solid var(--text-color);
					width: 100%;
					height: auto;
					display: flex;
					justify-content: center;
					align-content: center;
					align-items: center;
					text-align: center;
					padding: 0.5em;
					line-height: 1em;
					font-weight: 700;
					text-transform: uppercase;
					text-decoration: none;
					border-radius: 50%;
					aspect-ratio: 1 / 1;
					box-sizing: border-box;
					position: relative;
					z-index: 1;
				}
				.circle:before {
					content: " ";
					position: absolute;
					z-index: 0;
					pointer-events: none;
					top: 4px;
					left: 4px;
					right: 4px;
					bottom: 4px;
					border-radius: 50%;
					border: 1px solid var(--text-color);
				}
				.frame {
					box-sizing: border-box;
					padding: 4px;
					border: 2px solid var(--text-color);
					width: 100%;
					height: 100%;
					position: relative;
				}
				.frame:before {
					content: " ";
					position: absolute;
					z-index: 0;
					pointer-events: none;
					top: 4px;
					left: 4px;
					right: 4px;
					bottom: 4px;
					border: 1px solid var(--text-color);
				}
				.picture-frame {
					position: absolute;
					width: 100%;
					height: 100%;
					background: #ffffff;
					padding: 10px;
					border: 1px solid #f7f7f7;
					display: block;
					box-sizing: border-box;
					box-shadow: 2px 2px 21px 5px rgba(0, 0, 0, 0.1);
				}
				.container {
					display: flex;
					flex-direction: column;
					gap: 2rem;
					flex: 0;
					padding: 1rem;
					box-sizing: border-box;
					width: 100%;
					height: 100%;
					overflow: auto;
				}
			`}</style>
		</>
	);
}
