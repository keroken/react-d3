import React from 'react';
import { format } from 'date-fns';
import { sessionDataType, coordinatesType } from './BarGraph';

type xLabelsProps = {
  data: sessionDataType;
  coordinate: coordinatesType;
  withIcon?: boolean;
  chartHeight: number;
  color?: string;
};

const HorizontalLabels = ({data, coordinate, withIcon, chartHeight, color}: xLabelsProps) => {
  return (
    <>
      {withIcon &&
        <g transform={`translate(${coordinate.x - 4}, ${chartHeight + 6})`}>
          <circle cx={12} cy={12} r={12} fill={color} />
          <text x={2} y={16} fontSize={10} fill="#FFFFFF">{data.iconName}</text>
        </g>
      }
      <text textAnchor="end" x={coordinate.x} y={withIcon ? chartHeight + 30 : chartHeight + 6} dx={20} dy={20} fontSize={12} fill="#7C868A">{format(new Date(data.date), "d'日'")}</text>
      <text textAnchor="end" x={coordinate.x} y={withIcon ? chartHeight + 30 : chartHeight + 6} dx={20} dy={40} fontSize={12} fill="#7C868A">{format(new Date(data.date), "M'月'")}</text>
    </>
  );
};

export default HorizontalLabels;