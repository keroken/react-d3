import React from 'react';

export type sessionDataType = {
  sessionId: number;
  memberId: number;
  name: string;
  iconName: string;
  date: string;
  memberSpeech: number;
  mentorSpeech: number;
  sessionDuration: number;
};

export type coordinatesType = {
  x: number;
  y: number;
};

type BarGraphProps = {
  data: sessionDataType;
  ratio: number;
  coordinate: coordinatesType;
  color: string;
  chartHeight: number;
  withIcon?: boolean;
};

const BarGraph = ({data, ratio, coordinate, color, chartHeight, withIcon}: BarGraphProps) => {
  return (
    <>
      <rect width={6} height={ratio * data.memberSpeech} x={coordinate.x} y={coordinate.y} rx={3} fill={color} />
      <rect width={6} height={ratio * data.mentorSpeech} x={coordinate.x + 10} y={160 - (ratio * data.mentorSpeech)} rx={3} fill ="#CACCCD" />
    </>
  );
};

export default BarGraph;
