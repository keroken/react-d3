import React from 'react';
import styled from 'styled-components'

const svgDimension = {
  width: 240,
  height: 240
}
const features = ['熱量', '外向性', '身だしなみ', '独自性', '動画品質', '新指標'];
const  data: {[index: string]: number} = {}
features.forEach(f => data[f] = 1 + Math.floor(Math.random() * 5));
const radialScale = (input: number) => {
  const output = input / 5 * 60
  return output
}

const angleToCoordinate = (angle: number, value: number) => {
  const x = Math.cos(angle) * radialScale(value);
  const y = Math.sin(angle) * radialScale(value);
  return {'x': 120 + x, 'y': 120 - y};
}
type coordinate = {
  x: number,
  y: number,
}
const line_coordinates: coordinate[] = []
const label_coordinates: coordinate[] = []
for (let i = 0; i < features.length; i++) {
  let angle = (Math.PI / 2) + (2 * Math.PI * -i / features.length);
  line_coordinates.push(angleToCoordinate(angle, 5));
  label_coordinates.push(angleToCoordinate(angle, 7.5));
}

const Base = () => {
  return (
    <g>
      <BaseCircle cx={svgDimension.width / 2} cy={svgDimension.height / 2} r={60} stroke="gray" />
      <BaseCircle cx={svgDimension.width / 2} cy={svgDimension.height / 2} r={48} stroke="gray" />
      <BaseCircle cx={svgDimension.width / 2} cy={svgDimension.height / 2} r={36} stroke="gray" />
      <BaseCircle cx={svgDimension.width / 2} cy={svgDimension.height / 2} r={24} stroke="gray" />
      <BaseCircle cx={svgDimension.width / 2} cy={svgDimension.height / 2} r={12} stroke="gray" />
      {line_coordinates.map((line_coordinate) => (
        <line x1={120} y1={120} x2={line_coordinate.x} y2={line_coordinate.y} stroke="gray" />
      ))}
      {label_coordinates.map((label_coordinate, index) => (
        <StyledText x={label_coordinate.x} y={label_coordinate.y} textAnchor="middle">{features[index]}</StyledText>
      ))}
    </g>
  )
}

const RadarChartFlex: React.FC = () => {
  const getPathCoordinates = (data_point: {[index: string]: number}) => {
    const coordinates = [];
    for (let i =0; i < features.length; i++) {
      const ft_name = features[i];
      const angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
      coordinates.push(angleToCoordinate(angle, data_point[ft_name]));
    }
    return coordinates;
  }
  const coordinates = getPathCoordinates(data);

  return (
    <div>
      <svg width={svgDimension.width} height={svgDimension.height}>
        <Base />
          <polygon
            points={coordinates.map((coordinate) => `${coordinate.x}, ${coordinate.y}`).join(' ')}
            stroke="#17D4E5"
            strokeWidth="2"
            fill="rgba(23, 212, 229, 0.5)"
            opacity={0.5}
          />
          {coordinates.map((coordinate) => (
            <circle cx={coordinate.x} cy={coordinate.y} r={4} fill="#17D4E5" />
          ))}
      </svg>
    </div>
  );
};

const BaseCircle = styled.circle`
  fill: transparent;
`

const StyledText = styled.text`
  font-size: 12px;
  font-weight: normal;
  transform: translate(0, 5px);
`

export default RadarChartFlex