// Forked from https://codepen.io/tannergodarzi/pen/oNXYWOr/e2009c1b26f7ee4034f678029e68c6ff
import React, { useLayoutEffect, useEffect, useState, useRef, useCallback } from "react";

export default function Bouncy() {
	// Use useRef for mutable variables that we want to persist
	// without triggering a re-render on their change
	const boundingBoxRef = useRef<HTMLElement>(null);
	const actorRef = useRef<HTMLDivElement>(null);
	const windowAnimationRequestRef = useRef(null);
	let boundsRef = useRef(null);
	let directionRef = useRef({
		x: "increment",
		y: "increment",
	});
	let positionRef = useRef({
		x: 0,
		y: 0,
	});

	useLayoutEffect(() => {
		if (boundingBoxRef !== null) {
			const yEnd = boundingBoxRef.current.getBoundingClientRect().height;
			const xEnd = boundingBoxRef.current.getBoundingClientRect().width;
			boundsRef.current = {
				x: xEnd,
				y: yEnd,
			};
		}
		// TODO: Add Mutation observer
	}, [boundsRef, boundingBoxRef]);

	const updatePosition = () => {
		if (boundsRef.current !== null && actorRef.current !== null) {
			let xPos = positionRef.current.x;
			let yPos = positionRef.current.y;
			let xEnd = boundsRef.current.x;
			let yEnd = boundsRef.current.y;
			let xDirection = directionRef.current.x;
			let yDirection = directionRef.current.y;
			const start = 0;

			// X Positioning
			if (xDirection === "increment") {
				xPos = xPos + 1;

				if (xPos > xEnd - 20) {
					xDirection = "decrement";
				}
			} else if (xDirection === "decrement") {
				xPos = xPos - 1;

				if (xPos <= start) {
					xDirection = "increment";
				}
			}

			// Y Positioning
			if (yDirection === "increment") {
				yPos = yPos + 1;
				if (yPos > yEnd - 20) {
					yDirection = "decrement";
				}
			} else if (yDirection === "decrement") {
				yPos = yPos - 1;
				if (yPos <= start) {
					yDirection = "increment";
				}
			}

			positionRef.current = {
				x: xPos,
				y: yPos,
			};
			directionRef.current = {
				x: xDirection,
				y: yDirection,
			};

			actorRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
			windowAnimationRequestRef.current = window.requestAnimationFrame(updatePosition);
		}
	};

	useEffect(() => {
		windowAnimationRequestRef.current = requestAnimationFrame(updatePosition);
		return () => cancelAnimationFrame(windowAnimationRequestRef.current);
	}, []); // Make sure the effect runs only once

	return (
		<>
			<section className="bounding-box" ref={boundingBoxRef}>
				<div className="actor" ref={actorRef} />
			</section>
			<style jsx>{`
				.bounding-box {
					display: block;
					max-width: 720px;
					width: 100%;
					height: auto;
					aspect-ratio: 4/3;
					border: 1px solid #000000;
					overflow: hidden;
				}

				.actor {
					width: 48px;
					aspect-ratio: 1/1;
					background: #000000;
					will-change: transform;
				}
			`}</style>
		</>
	);
}