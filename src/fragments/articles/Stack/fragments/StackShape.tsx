import "./StackShape.scss";

import * as React from "react";

const GAP = 10;
const BLOCK_STROKE_WIDTH = 2;

export interface StackShapeProps {
  blocks: (number | string)[];
  blockWidth: number;
  blockHeight: number;
}

export function StackShape({
  blocks,
  blockHeight,
  blockWidth,
}: StackShapeProps) {
  // вся ширина схемы
  const fullWidth = blockWidth * 2;
  // высота блока с учетом отступа
  const height = blockHeight + GAP;

  // координата х блока
  const blockX = blockWidth / 2;

  // высота подложки
  const bottomHeight = blockHeight * 0.3;

  const blocksCount = blocks.length;

  const reversedBlocks = [...blocks].reverse();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={fullWidth}
      height={height * blocksCount + bottomHeight}
      viewBox={`0 0 ${fullWidth} ${height * blocksCount +
        bottomHeight +
        BLOCK_STROKE_WIDTH}`}
      className="stack-shape"
    >
      <g>
        {reversedBlocks.map((b, i) => (
          <g key={b}>
            <rect
              rx="15"
              ry="15"
              x={blockX}
              y={i * height + BLOCK_STROKE_WIDTH}
              width={blockWidth}
              height={blockHeight}
              strokeWidth={BLOCK_STROKE_WIDTH}
              className="stack-shape__block"
            />
            <text
              x="50%"
              y={(i + 1) * height - blockHeight / 2}
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
              fill="white"
            >
              {b}
            </text>
          </g>
        ))}
      </g>
      <g>
        <rect
          rx="4"
          ry="4"
          x="0"
          y={height * blocksCount}
          width={fullWidth}
          height={bottomHeight}
          className="stack-shape__base"
        />
        <text
          x="50%"
          y={height * blocksCount + (bottomHeight / 2) * 1.5}
          fontFamily="Verdana"
          fontSize="14"
          textAnchor="middle"
          fill="white"
          className="stack-shape__base-text"
        >
          Base
        </text>
      </g>
    </svg>
  );
}
