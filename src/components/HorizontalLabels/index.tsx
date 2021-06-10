import { coordinatesType, dimensionsType, sessionDataType } from '../chartTypes';
import { format } from 'date-fns';
import React from 'react';

type xLabelsProps = {
  sessionData: sessionDataType[];
  dimensions: dimensionsType;
  withIcon?: boolean;
  color?: string;
};

export const HorizontalLabels = ({ sessionData, dimensions, withIcon, color }: xLabelsProps) => {
  const labelCoordinates: coordinatesType[] = [];

  sessionData.forEach((data, i) => {
    const posX = (dimensions.chartWidth / (sessionData.length + 1)) * (i + 1);
    const posY = dimensions.chartHeight;
    labelCoordinates.push({ x: posX, y: posY });
  });
  return (
    <>
      {sessionData.map((data, i) => (
        <>
          {withIcon && (
            <g transform={`translate(${labelCoordinates[i].x - 12}, ${dimensions.chartHeight + 6})`}>
              <circle cx={12} cy={12} r={12} fill={color} />
              <text x={2} y={16} fontSize={10} fill="#FFFFFF">
                {data.iconName}
              </text>
            </g>
          )}
          <text
            textAnchor="end"
            x={labelCoordinates[i].x}
            y={withIcon ? dimensions.chartHeight + 30 : dimensions.chartHeight + 6}
            dx={12}
            dy={20}
            fontSize={12}
            fill="#7C868A"
          >
            {format(new Date(data.date), "d'日'")}
          </text>
          <text
            textAnchor="end"
            x={labelCoordinates[i].x}
            y={withIcon ? dimensions.chartHeight + 30 : dimensions.chartHeight + 6}
            dx={12}
            dy={40}
            fontSize={12}
            fill="#7C868A"
          >
            {format(new Date(data.date), "M'月'")}
          </text>
        </>
      ))}
    </>
  );
};
