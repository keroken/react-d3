import React, { useEffect, useRef, useState } from 'react';
import { axisBottom, axisLeft, max, scaleBand, scaleLinear } from 'd3';
import styled from 'styled-components'

const dimensions = {
  width: 678,
  height: 235,
  chartWidth: 700,
  chartHeight: 400,
  marginTop: 50,
  marginLeft: 100
}

const Bargraph01: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null)

  const horizontalLines = [];
  for (let i = 0; i < 5; i++) {
    horizontalLines.push(
      <>
        <line x1="0" y1={i * 40 + 20} x2="630" y2={i * 40 + 20} stroke="#E9EAEB" />
        <text x="640" dy="5" y={i * 40 + 20} fontSize={12} fill="#7C868A">{`${4 - i}0分`}</text>
      </>
    );
  }

  return (
    <>
      <StyledBase>
        <svg ref={ref} width={dimensions.width} height={dimensions.height}>
          <rect width="6" height="30" x="60" y="150" rx="3" fill="#76D4F4" />
          <rect width="6" height="50" x="72" y="130" rx="3" fill="#CACCCD" />
          <rect width="6" height="50" x="180" y="130" rx="3" fill="#8AE58B" />
          <rect width="6" height="70" x="192" y="110" rx="3" fill="#CACCCD" />
          <rect width="6" height="60" x="300" y="120" rx="3" fill="#F9B12B" />
          <rect width="6" height="70" x="312" y="110" rx="3" fill="#CACCCD" />
          <rect width="6" height="80" x="420" y="100" rx="3" fill="#76D4F4" />
          <rect width="6" height="60" x="432" y="120" rx="3" fill="#CACCCD" />
          <rect width="6" height="70" x="540" y="110" rx="3" fill="#F9B12B" />
          <rect width="6" height="50" x="552" y="130" rx="3" fill="#CACCCD" />
          <circle cx="68" cy="200" r="12" fill="#76D4F4"></circle>
          <text x="60" y="210" dy="20" fontSize={12} fill="#7C868A">30日</text>
          <text x="180" y="210" dy="20" fontSize={12} fill="#7C868A">6日</text>
          <text x="300" y="210" dy="20" fontSize={12} fill="#7C868A">13日</text>
          <text x="420" y="210" dy="20" fontSize={12} fill="#7C868A">20日</text>
          <text x="540" y="210" dy="20" fontSize={12} fill="#7C868A">27日</text>
          {horizontalLines}
        </svg>
        <StyledIcon>
          岩谷
        </StyledIcon>
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

const StyledIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #76D4F4;
  border-radius: 999px;
  color: white;
  font-size: 10px;
  text-align: center;
  line-height: 24px;
`;

export default Bargraph01;
