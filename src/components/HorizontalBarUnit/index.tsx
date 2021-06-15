import { coordinatesType, dimensionsType, sessionDataType } from '../chartTypes';
import React from 'react';

type HorizontalBarChartProps = {
  unitValue: number;
  graphRatio: number;
  color: string;
};

export const HorizontalBarUnit = ({ unitValue, graphRatio, color }: HorizontalBarChartProps) => {
  return (
    <svg>
      <rect
        height={12}
        width={graphRatio}
        x={0}
        y={0}
        rx={2}
        fill="#CACCCD"
      />
      <rect
        height={12}
        width={unitValue / 100 * graphRatio}
        x={0}
        y={0}
        rx={2}
        fill={color}
      />
    </svg>
  );
};
