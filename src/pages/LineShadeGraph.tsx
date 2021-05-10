import React from 'react';

type coordinatesType = {
  x: number;
  y: number;
};

type LineShadeGraphProps = {
  pointData: coordinatesType[];
  color?: string;
  chartHeight: number;
};

const LineShadeGraph = ({pointData, color = '#7C868A', chartHeight}: LineShadeGraphProps) => {
  let areaPoints = `${pointData[0].x + 8},${chartHeight} `;
  let linePoints = '';
  pointData.forEach((data, i) => {
    linePoints = linePoints + (pointData[i].x + 8).toString() + ',' + pointData[i].y.toString() + ' ';
    areaPoints = areaPoints + (pointData[i].x + 8).toString() + ',' + pointData[i].y.toString() + ' ';
  });
  areaPoints = areaPoints.concat(`${pointData[pointData.length - 1].x + 8},${chartHeight} `);
  return  (
    <>
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="40%"  stopColor={color} />
          <stop offset="100%" stopColor="white" stopOpacity={0} />
        </linearGradient>
      </defs>
      <polyline points={areaPoints} stroke="none" fill="url('#myGradient')" />
      <polyline points={linePoints} stroke={color} fill="none" />
    </>
  );
};

export default LineShadeGraph;