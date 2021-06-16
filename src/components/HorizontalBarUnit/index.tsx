import React from 'react';
import styled from 'styled-components';

type HorizontalBarChartProps = {
  unitValue: number;
  graphRatio: number;
  color: string;
};

export const HorizontalBarUnit = ({ unitValue, graphRatio, color }: HorizontalBarChartProps) => {
  return (
    <StyledSvg graphRatio={graphRatio}>
      <rect
        height={12}
        width={graphRatio}
        x={0}
        y={0}
        rx={2}
        fill="#CACCCD"
      />
      <rect
        height={12}
        width={unitValue / 100 * graphRatio}
        x={0}
        y={0}
        rx={2}
        fill={color}
      />
    </StyledSvg>
  );
};

const StyledSvg = styled.svg<Pick<HorizontalBarChartProps, 'graphRatio'>>`
  width: ${props => props.graphRatio}px;
  height: 12px;
`
