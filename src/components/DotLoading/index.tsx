import { ColorTokens, square } from '@/styles';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
  size: 'small' | 'large';
  loading: boolean;
  position?: 'fixed' | 'absolute' | 'static';
  delayTime?: number;
  className?: string;
};

export const DotLoading = ({ size, loading = false, delayTime = 0, position = 'fixed', className }: Props) => {
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
    <StyledDotLoading size={size} position={position} className={className}>
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </StyledDotLoading>
  );
};

const StyledDotLoading = styled.div<Pick<Props, 'size' | 'position'>>`
  position: ${({ position }) => position};
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .spinner {
    display: flex;
    justify-content: space-between;
    width: 160px;
    text-align: center;

    & > div {
      display: inline-block;
      ${props => (props.size === 'small' ? square(20) : square(32))}
      background-color: ${ColorTokens.Interactive05};
      border-radius: 100%;
      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    }

    & > div:nth-of-type(2) {
      background-color: ${ColorTokens.Interactive06};
    }

    & .bounce1 {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }

    & .bounce2 {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }
  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
