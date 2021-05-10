import React from 'react';

type coordinatesType = {
  x: number;
  y: number;
};

type LineGraphProps = {
  linePoints: string;
  endPoint: coordinatesType;
};

const LineGraph = ({linePoints, endPoint}: LineGraphProps) => {
  return  (
    <>
      <polyline points={linePoints} stroke="#7C868A" fill="none" />
      <circle cx={endPoint.x} cy={endPoint.y} r={12} fill="#A4A5A6" fillOpacity={0.2} />
      <circle cx={endPoint.x} cy={endPoint.y} r={4} fill="#7C868A" />
    </>
  );
};

export default LineGraph;