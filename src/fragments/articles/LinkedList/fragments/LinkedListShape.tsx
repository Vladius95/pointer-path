import "./LinkedListShape.scss";

import * as React from "react";

const GAP = 10;
const BLOCK_STROKE_WIDTH = 4;

export interface LinkedListShapeProps {
  blocks: (number | string)[];
  blockWidth: number;
  blockHeight: number;
}

export function LinkedListShape({
  blocks,
  blockHeight,
  blockWidth,
}: LinkedListShapeProps) {
  // ширина блока с учетом отступа
  const width = blockWidth + GAP;
  const blocksCount = blocks.length;

  // вся ширина схемы
  const fullWidth = width * blocksCount;

  // координата х блока
  const blockX = blockWidth / 2;

  const reversedBlocks = [...blocks].reverse();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={fullWidth + BLOCK_STROKE_WIDTH}
      height={blockHeight + BLOCK_STROKE_WIDTH}
      viewBox={`0 0 ${fullWidth + BLOCK_STROKE_WIDTH} ${blockHeight}`}
      className="linked-list-shape"
    >
      {reversedBlocks.map((b, i) => (
        <g key={b}>
          <rect
            rx="15"
            ry="15"
            x={i * width + BLOCK_STROKE_WIDTH}
            y={0}
            width={blockWidth}
            height={blockHeight}
            strokeWidth={BLOCK_STROKE_WIDTH}
            className="linked-list-shape__block"
          />
          <line
            x1={i * width + width / 2}
            y1={0}
            x2={i * width + width / 2}
            y2={blockHeight}
            strokeWidth={BLOCK_STROKE_WIDTH}
            className="linked-list-shape__divide-line linked-list-shape__divide-line--vertical"
          />
          <line
            x1={i * width + BLOCK_STROKE_WIDTH}
            y1={blockHeight * 0.3}
            x2={i * width + blockWidth + BLOCK_STROKE_WIDTH}
            y2={blockHeight * 0.3}
            strokeWidth={BLOCK_STROKE_WIDTH}
            className="linked-list-shape__divide-line linked-list-shape__divide-line--horizontal"
          />

          {/* <text
              x="50%"
              y={(i + 1) * height - blockHeight / 2}
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
              fill="white"
            >
              {b}
            </text> */}
        </g>
      ))}
    </svg>
  );
}
