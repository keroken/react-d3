import React from 'react';

type Props = {
  chartWidth: number;
};

export const HorizontalLines = ({ chartWidth }: Props) => {
  const horizontalLines = [];
  for (let i = 0; i < 5; i++) {
    horizontalLines.push(
      <g key={i}>
        <line x1="0" y1={i * 40} x2={chartWidth} y2={i * 40} stroke="#E9EAEB" />
        <text x={chartWidth + 10} dy="5" y={i * 40} fontSize={12} fill="#7C868A">{`${4 - i}0分`}</text>
      </g>,
    );
  }
  return <>{horizontalLines}</>;
};
