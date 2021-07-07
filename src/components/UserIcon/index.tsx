import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  name: string;
  bgColor: string;
  imageUrl?: string;
  size: 'small' | 'regular' | 'large';
  isActive?: boolean;
  showData?: boolean;
  dataValue?: number;
};

export const UserIcon = ({ name, bgColor, imageUrl, size, isActive, showData, dataValue = 0 }: Props) => {
  const radius = size === 'large' ? 32 : size === 'regular' ? 16 : 12;
  const innerRadius = size === 'large' ? 30.5 : size === 'regular' ? 14.5 : 10.5;
  const circumference = 2 * Math.PI * innerRadius;
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const progressOffset = -(dataValue / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, circumference, dataValue, offset]);
  const initial = name.slice(0, 2);

  return (
    <>
      <StyledMemberIcon imageUrl={imageUrl} size={size} bgColor={bgColor}>
        {imageUrl ? null : initial}
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

const StyledMemberIcon = styled.span<Pick<Props, 'imageUrl' | 'size' | 'bgColor'>>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          width: 24px;
          height: 24px;
          font-size: 14px;
        `;
      case 'large':
        return css`
          width: 64px;
          height: 64px;
          font-size: 24px;
        `;
      default:
        return css`
          width: 32px;
          height: 32px;
          font-size: 16px;
        `;
    }
  }};
  color: #202428;
  background-color: ${props => props.bgColor};
  ${props =>
    props.imageUrl &&
    css`
      background-image: url(${props.imageUrl});
      background-position: center;
      background-size: cover;
    `}
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
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

const StyledCircle = styled.circle`
  transition: stroke-dashoffset 600ms ease-in-out;
`;
