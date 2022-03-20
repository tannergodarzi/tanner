// Forked from https://codepen.io/tannergodarzi/pen/oNXYWOr/e2009c1b26f7ee4034f678029e68c6ff
import React, {useLayoutEffect, useEffect, useState } from "react";

export default function Bouncy() {
    const [position, setPosition] = React.useState({
      x: 0,
      y: 0
    });
    const [direction, setDirection] = React.useState({
      x: "increment",
      y: "increment"
    });
    const [bounds, setBounds] = React.useState({
      x: 0,
      y: 0
    });
    
    const boundingBoxRef = React.useRef(null);
  
    const updatePosition = () => {
      let xPos = position.x;
      let yPos = position.y;
      let xEnd = bounds.x;
      let yEnd = bounds.y;
      let xDirection = direction.x;
      let yDirection = direction.y;
      const start = 0;
      
  
      // X Positioning
      if (xDirection === "increment") {
        xPos = xPos + 1;
  
        if (xPos > xEnd - 20) {
          xDirection = "decrement";
        }
      } else if (direction.x === "decrement") {
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
      setPosition({
        x: xPos,
        y: yPos
      });
      setDirection({
        x: xDirection,
        y: yDirection
      });
      window.requestAnimationFrame(updatePosition);
    };
  
    useLayoutEffect(() => {
      if (boundingBoxRef !== null) {
        const yEnd = boundingBoxRef.getBoundingClientRect().height;
        const xEnd = boundingBoxRef.getBoundingClientRect().width;
        setBounds({
            x: xEnd,
            y: yEnd
        });
      }
    }, [boundingBoxRef, setBounds]);
  
    useEffect(() => {
      updatePosition();
      return window.cancelAnimationFrame(updatePosition);
    }, [updatePosition]);
    
    const styles = {
            transform: `translate(${position.x}px, ${position.y}px)`
    };

    return (
        <>
      <div className="bounding-box" ref={boundingBoxRef}>
        <div
          className="actor"
          style={styles}
        />
      </div>
      <style jsx>{`.bounding-box {
          display: block;
          max-width: 720px;
          width: 100%;
          aspect-ratio: 1/1;
      }`}</style>
      </>
    );
  };
  