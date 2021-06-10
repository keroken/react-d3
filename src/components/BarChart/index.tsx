import { coordinatesType, dimensionsType, sessionDataType } from '../chartTypes';
import React from 'react';

type BarChartProps = {
  dimensions: dimensionsType;
  sessionData: sessionDataType[];
  graphRatio: number;
  color: string;
};

export const BarChart = ({ dimensions, sessionData, graphRatio, color }: BarChartProps) => {
  const barCoordinates: coordinatesType[] = [];

  sessionData.forEach((data, i) => {
    const posX = (dimensions.chartWidth / (sessionData.length + 1)) * (i + 1);
    const posY = dimensions.chartHeight - graphRatio * data.memberSpeech;
    barCoordinates.push({ x: posX, y: posY });
  });
  return (
    <svg>
      {sessionData.map((data, i) => (
        <>
          <rect
            width={12}
            height={graphRatio * data.mentorSpeech}
            x={barCoordinates[i].x - 18}
            y={160 - graphRatio * data.mentorSpeech}
            rx={2}
            fill="#CACCCD"
          />
          <rect
            width={12}
            height={graphRatio * data.memberSpeech}
            x={barCoordinates[i].x + 6}
            y={barCoordinates[i].y}
            rx={2}
            fill={color}
          />
        </>
      ))}
    </svg>
  );
};
