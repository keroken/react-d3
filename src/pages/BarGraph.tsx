import React from 'react';
import { format } from 'date-fns';

type sessionDataType = {
  sessionId: number;
  memberId: number;
  name: string;
  iconName: string;
  date: string;
  memberSpeech: number;
  mentorSpeech: number;
  sessionDuration: number;
};

type coordinatesType = {
  x: number;
  y: number;
};

type BarGraphProps = {
  data: sessionDataType;
  ratio: number;
  coordinate: coordinatesType;
  color: string;
  chartHeight: number;
};

const BarGraph = ({data, ratio, coordinate, color, chartHeight}: BarGraphProps) => {
  return (
    <>
      <rect width={6} height={ratio * data.memberSpeech} x={coordinate.x} y={coordinate.y} rx={3} fill={color} />
      <rect width={6} height={ratio * data.mentorSpeech} x={coordinate.x + 10} y={160 - (ratio * data.mentorSpeech)} rx={3} fill ="#CACCCD" />
      <g transform={`translate(${coordinate.x - 4}, ${chartHeight + 6})`}>
        <circle cx={12} cy={12} r={12} fill={color} />
        <text x={2} y={16} fontSize={10} fill="#FFFFFF">{data.iconName}</text>
      </g>
      <text textAnchor="end" x={coordinate.x} y={chartHeight + 30} dx={20} dy={20} fontSize={12} fill="#7C868A">{format(new Date(data.date), "d'日'")}</text>
      <text textAnchor="end" x={coordinate.x} y={chartHeight + 30} dx={20} dy={40} fontSize={12} fill="#7C868A">{format(new Date(data.date), "M'月'")}</text>
    </>
  );
};

export default BarGraph;
