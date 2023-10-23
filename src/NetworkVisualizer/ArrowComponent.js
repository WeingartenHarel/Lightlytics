import React from "react";
import { Stage, Layer, Arrow } from "react-konva";

const ArrowComponent = ({ arrowsData }) => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {arrowsData.map((arrow, index) => {
          const { x1, y1, x2, y2 } = arrow;
          return (
            <Arrow
              key={index}
              points={[x1, y1, x2, y2]} // [x1, y1, x2, y2]
              pointerLength={10}
              pointerWidth={10}
              fill="black"
              stroke="black"
              strokeWidth={1}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

export default ArrowComponent;
