import React from 'react';
import BarGraph from './BarGraph';
import LineGraph from './LineGraph';
import HorizontalLabels from './HorizontalLabels';
import styled from 'styled-components';

const sessionData = [
  { sessionId: 1003, memberId: 1, name: '岩谷真里奈', iconName: '岩谷', date: '2021-03-30', memberSpeech: 5.0, mentorSpeech: 11.0, sessionDuration: 13.0 },
  { sessionId: 1021, memberId: 2, name: '大月加奈', iconName: '大月', date: '2021-04-06', memberSpeech: 7.0, mentorSpeech: 15.0, sessionDuration: 22.0 },
  { sessionId: 1034, memberId: 3, name: '下田裕美', iconName: '下田', date: '2021-04-13', memberSpeech: 12.0, mentorSpeech: 16.0, sessionDuration: 23.0 },
  { sessionId: 1039, memberId: 1, name: '岩谷真里奈', iconName: '岩谷', date: '2021-04-20', memberSpeech: 18.0, mentorSpeech: 16.0, sessionDuration: 30.0 },
  { sessionId: 1042, memberId: 3, name: '下田裕美', iconName: '下田', date: '2021-04-27', memberSpeech: 18.0, mentorSpeech: 11.0, sessionDuration: 24.0 },
];

const memberColors = ['#76D4F4', '#8AE58B', '#F9B12B'];

const memberColor = (memberId: number) => {
  switch (memberId % 3) {
    case 1:
      return memberColors[0];
    case 2:
      return memberColors[1];
    default:
      return memberColors[2];
  }
};

const dimensions = {
  width: 800,
  height: 300,
  chartWidth: 700,
  chartHeight: 160,
  marginTop: 50,
  marginLeft: 100
}

type coordinatesType = {
  x: number;
  y: number;
};

const ratio = (domain: number, range: number) => {
  return (range / domain);
};

const Graph01: React.FC = () => {
  const horizontalLines = [];
  for (let i = 0; i < 5; i++) {
    horizontalLines.push(
      <>
        <line x1="0" y1={i * 40} x2={dimensions.chartWidth} y2={i * 40} stroke="#E9EAEB" />
        <text x={dimensions.chartWidth + 10} dy="5" y={i * 40} fontSize={12} fill="#7C868A">{`${4 - i}0分`}</text>
      </>
    );
  }

  const graphRatio = ratio(40, dimensions.chartHeight);

  const barCoordinates: coordinatesType[] = [];
  let linePoints: string = '';

  sessionData.forEach((data, i) => {
    const posX = dimensions.chartWidth/ (sessionData.length + 1) * (i + 1);
    const posY = dimensions.chartHeight  - (graphRatio * data.memberSpeech);
    const pointY = dimensions.chartHeight - (graphRatio * data.sessionDuration);
    barCoordinates.push({x: posX, y: posY});
    linePoints = linePoints + (posX + 8).toString() + ',' + pointY.toString() + ' ';
  });

  const endPoint: coordinatesType = { x: dimensions.chartWidth / (sessionData.length + 1) * (sessionData.length) + 8, y: 160 - graphRatio * sessionData[sessionData.length - 1].sessionDuration};

  return (
    <>
      <StyledBase>
        <svg width={dimensions.width} height={dimensions.height}>
          <g transform="translate(0, 20)">
            {horizontalLines}
            {sessionData.map((data, i) => (
              <>
                <BarGraph
                  withIcon
                  data={data}
                  ratio={graphRatio}
                  coordinate={barCoordinates[i]}
                  color={memberColor(data.memberId)}
                  chartHeight={dimensions.chartHeight}
                />
                <HorizontalLabels
                  data={data}
                  coordinate={barCoordinates[i]}
                  withIcon
                  chartHeight={dimensions.chartHeight}
                  color={memberColor(data.memberId)}
                />
              </>
            ))}
            <LineGraph linePoints={linePoints} endPoint={endPoint} />
          </g>
        </svg>
      </StyledBase>
    </>
  );
};

const StyledBase = styled.div`
  width: 748px;
  height: 365px;
  padding: 70px 32px 32px;
  margin: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  border: 1px solid #CACCCD;
`

export default Graph01;
