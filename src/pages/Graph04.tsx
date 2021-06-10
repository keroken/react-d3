import { BarChart } from '../components/BarChart';
import { HorizontalLabels } from '../components/HorizontalLabels';
import { HorizontalLines } from '../components/HorizontalLines';
import { LineChart } from '../components/LineChart';
import { sessionDataType } from '../components/chartTypes';
import { useRatio } from '../components/useRatio';
import React from 'react';

const Graph04: React.FC = () => {
  const graphRatio = useRatio(40, dimensions.chartHeight);
  return (
    <svg width={dimensions.width} height={dimensions.height}>
      <g transform="translate(50, 50)">
        <HorizontalLines chartWidth={dimensions.chartWidth} />
        <BarChart dimensions={dimensions} sessionData={sessionData} graphRatio={graphRatio} color="#8AE58B" />
        <LineChart dimensions={dimensions} sessionData={sessionData} graphRatio={graphRatio} color="#8AE58B" />
        <HorizontalLabels sessionData={sessionData} dimensions={dimensions} withIcon color="#8AE58B" />
      </g>
    </svg>
  );
};

const dimensions = {
  width: 800,
  height: 300,
  chartWidth: 700,
  chartHeight: 160,
  marginTop: 50,
  marginLeft: 100
}

const sessionData: sessionDataType[] = [
  {
    sessionId: 1003,
    memberId: 2,
    name: '大月加奈',
    iconName: '大月',
    date: '2021-03-30',
    memberSpeech: 5.0,
    mentorSpeech: 11.0,
    sessionDuration: 13.0,
  },
  {
    sessionId: 1021,
    memberId: 2,
    name: '大月加奈',
    iconName: '大月',
    date: '2021-04-06',
    memberSpeech: 7.0,
    mentorSpeech: 15.0,
    sessionDuration: 22.0,
  },
  {
    sessionId: 1034,
    memberId: 2,
    name: '大月加奈',
    iconName: '大月',
    date: '2021-04-13',
    memberSpeech: 12.0,
    mentorSpeech: 16.0,
    sessionDuration: 23.0,
  },
  {
    sessionId: 1039,
    memberId: 2,
    name: '大月加奈',
    iconName: '大月',
    date: '2021-04-20',
    memberSpeech: 18.0,
    mentorSpeech: 16.0,
    sessionDuration: 30.0,
  },
  {
    sessionId: 1042,
    memberId: 2,
    name: '大月加奈',
    iconName: '大月',
    date: '2021-04-27',
    memberSpeech: 18.0,
    mentorSpeech: 11.0,
    sessionDuration: 24.0,
  },
];

export default Graph04;
