import { BorderRadius, ColorTokens, UserColorTokens, UserColorType, square } from '@/styles';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  name: string;
  nameForIcon?: string;
  bgColor: UserColorType;
  imageUrl?: string;
  size: 'small' | 'regular' | 'large';
  isActive?: boolean;
  showData?: boolean;
  dataValue?: number;
};

export const UserIcon = ({ name, nameForIcon, bgColor, imageUrl, size, isActive, showData, dataValue = 0 }: Props) => {
  const radius = size === 'large' ? 32 : size === 'regular' ? 16 : 12;
  const innerRadius = size === 'large' ? 30.5 : size === 'regular' ? 14.5 : 10.5;
  const circumference = 2 * Math.PI * innerRadius;
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const progressOffset = -(dataValue / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, circumference, dataValue, offset]);
  let nameOnIcon = '';
  if (nameForIcon !== undefined) {
    nameOnIcon = nameForIcon.slice(0, 3);
  } else {
    nameOnIcon = name.slice(0, 2);
  }

  return (
    <>
      <StyledMemberIcon imageUrl={imageUrl} size={size} bgColor={bgColor}>
        {imageUrl ? null : nameOnIcon}
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
          ${square(24)}
          font-size: 9px;
        `;
      case 'large':
        return css`
          ${square(64)}
          font-size: 20px;
        `;
      default:
        return css`
          ${square(32)}
          font-size: 11px;
        `;
    }
  }};
  text-align: center;
  line-height: 12px;
  color: ${ColorTokens.Text05};
  background-color: ${({ bgColor }) => UserColorTokens[bgColor]};
  ${props =>
    props.imageUrl &&
    css`
      background-image: url(${props.imageUrl});
      background-position: center;
      background-size: cover;
    `}
  border-radius: ${BorderRadius.Circle};
`;

const StyledBadge = styled.span<Pick<Props, 'size'>>`
  position: absolute;
  right: 0;
  bottom: 0;
  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          ${square(16)}
        `;
      default:
        return css`
          ${square(10)}
        `;
    }
  }};
  border-radius: ${BorderRadius.Circle};
  border: 1px solid ${ColorTokens.Icon03};
  background-color: ${ColorTokens.Interactive04};
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
