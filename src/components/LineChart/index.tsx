import { coordinatesType, dimensionsType, sessionDataType } from '../chartTypes';
import React from 'react';

type LineChartProps = {
  dimensions: dimensionsType;
  sessionData: sessionDataType[];
  graphRatio: number;
  color?: string;
};

export const LineChart = ({ dimensions, sessionData, graphRatio, color = '#7C868A' }: LineChartProps) => {
  const lineCoordinates: coordinatesType[] = [];
  let linePoints = '';

  sessionData.forEach((data, i) => {
    const posX = (dimensions.chartWidth / (sessionData.length + 1)) * (i + 1);
    const pointY = dimensions.chartHeight - graphRatio * data.sessionDuration;
    lineCoordinates.push({ x: posX, y: pointY });
    linePoints = `${linePoints + posX.toString()},${pointY.toString()} `;
  });
  const endPoint: coordinatesType = {
    x: (dimensions.chartWidth / (sessionData.length + 1)) * sessionData.length,
    y: 160 - graphRatio * sessionData[sessionData.length - 1].sessionDuration,
  };

  return (
    <>
      {lineCoordinates.map(point => (
        <circle key={point.x.toFixed()} cx={point.x} cy={point.y} r={4} fill={color} />
      ))}
      <polyline points={linePoints} stroke={color} fill="none" />
      <circle cx={endPoint.x} cy={endPoint.y} r={12} fill={color} fillOpacity={0.1} />
    </>
  );
};
