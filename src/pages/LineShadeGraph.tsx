import React from 'react';

type coordinatesType = {
  x: number;
  y: number;
};

type LineGraphProps = {
  linePoints: string;
  endPoint: coordinatesType;
  color?: string;
};

const LineShadeGraph = ({linePoints, endPoint, color = '#7C868A'}: LineGraphProps) => {
  return  (
    <>
      <polyline points={linePoints} stroke={color} fill="none" />
      <circle cx={endPoint.x} cy={endPoint.y} r={12} fill={color} fillOpacity={color === '#7C868A' ? 0.2 : 0.4} />
      <circle cx={endPoint.x} cy={endPoint.y} r={4} fill={color} />
    </>
  );
};

export default LineShadeGraph;