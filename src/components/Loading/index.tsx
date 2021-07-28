import { ColorTokens, square } from '@/styles';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  size: 'small' | 'large';
  loading: boolean;
  position?: 'fixed' | 'absolute' | 'static';
  delayTime?: number;
};

export const Loading = ({ size, loading = false, delayTime = 0, position = 'fixed' }: Props) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const loadingTimerId = window.setTimeout(() => {
        setShowLoading(true);
      }, delayTime);
      return () => {
        window.clearTimeout(loadingTimerId);
        setShowLoading(false);
      };
    }
    setShowLoading(false);
    return undefined;
  }, [loading, delayTime]);

  if (!showLoading) {
    return null;
  }

  return (
    <StyledLoading size={size} position={position}>
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className="circular-move" cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="3" fill="none" />
      </svg>
    </StyledLoading>
  );
};

const StyledLoading = styled.div<Pick<Props, 'size' | 'position'>>`
  position: ${({ position }) => position};
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  & svg {
    ${({ size }) => {
      if (size === 'small') {
        return css`
          ${square(16)}
        `;
      }
      return css`
        ${square(32)}
      `;
    }}
    color: ${ColorTokens.Interactive01};

    & circle {
      stroke-dasharray: 80px 200px;
      stroke-dashoffset: 0px;
      transform-origin: 50% 50%;
      animation: circular-move 1.4s ease-in-out infinite;
      @keyframes circular-move {
        0% {
          stroke-dasharray: 1px, 200px;
          stroke-dashoffset: 0px;
          transform: rotate(0deg);
        }
        50% {
          stroke-dasharray: 100px, 200px;
          stroke-dashoffset: -15px;
        }
        100% {
          stroke-dasharray: 100px, 200px;
          stroke-dashoffset: -125px;
          transform: rotate(360deg);
        }
      }
    }
  }
`;
