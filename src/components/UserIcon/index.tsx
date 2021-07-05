import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  imageUrl: string;
  size: 'small' | 'regular' | 'large';
  isActive?: boolean;
  showData?: boolean;
  dataValue?: number;
};

export const UserIcon = ({ imageUrl, size, isActive, showData, dataValue = 0 }: Props) => {
  const radius = 16;
  const innerRadius = 14.5;
  const circumference = 2 * Math.PI * innerRadius;
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const progressOffset = -(dataValue / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, circumference, dataValue, offset]);

  return (
    <>
      <StyledMemberIcon imageUrl={imageUrl} size={size}>
        {isActive && <StyledBadge size={size} />}
        {showData && (
          <StyledSVG>
            <StyledCircle fill="transparent" stroke="#17D4E5" strokeWidth={3} cx={radius} cy={radius} r={innerRadius} />
            <StyledCircle
              fill="transparent"
              stroke="#DEDFE0"
              strokeWidth={3}
              cx={radius}
              cy={radius}
              r={innerRadius}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </StyledSVG>
        )}
      </StyledMemberIcon>
    </>
  );
};

const StyledMemberIcon = styled.span<Pick<Props, 'imageUrl' | 'size'>>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          width: 24px;
          height: 24px;
        `;
      case 'large':
        return css`
          width: 64px;
          height: 64px;
        `;
      default:
        return css`
          width: 32px;
          height: 32px;
        `;
    }
  }};
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  border-radius: 999px;
`;

const StyledBadge = styled.span<Pick<Props, 'size'>>`
  position: absolute;
  right: 0;
  bottom: 0;
  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          width: 16px;
          height: 16px;
        `;
      default:
        return css`
          width: 10px;
          height: 10px;
        `;
    }
  }};
  border-radius: 999px;
  border: 1px solid white;
  background-color: #17D4E5;
`;

const StyledSVG = styled.svg`
  transform: rotate(-90deg);
`;

const StyledCircle = styled.circle`
  transition: stroke-dashoffset 600ms ease-in-out;
`;
