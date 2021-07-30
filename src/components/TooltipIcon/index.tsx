import { BorderRadius, ColorTokenType, ColorTokens, IconToken, TypographyTokens, ZIndexes } from '@/styles';
import { Icon } from '../Icon';
import { IconName } from '@/icon';
import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  icon: IconName;
  size: IconToken;
  iconColor?: ColorTokenType;
  child: string;
  width?: number;
  left?: number;
  arrowLeft?: string;
  noChangeBackgroundColorOnHover?: boolean;
};

export const TooltipIcon = ({
  icon,
  size,
  iconColor = 'Icon01',
  child,
  width,
  left,
  arrowLeft,
  noChangeBackgroundColorOnHover = false,
}: Props) => (
  <StyledTooltipIcon
    size={size}
    width={width}
    left={left}
    arrowLeft={arrowLeft}
    noChangeBackgroundColorOnHover={noChangeBackgroundColorOnHover}
  >
    <Icon name={icon} color={iconColor} size={size} className="tooltip-icon" />
    <span className="tooltiptext">{child}</span>
  </StyledTooltipIcon>
);

export const StyledTooltipText = styled.span<{ textAlign: React.CSSProperties['textAlign'] }>`
  text-align: ${({ textAlign }) => textAlign};
`;

const StyledTooltipIcon = styled.span<
  { noChangeBackgroundColorOnHover: boolean } & Pick<Props, 'size' | 'width' | 'left' | 'arrowLeft'>
>`
  position: relative;

  .tooltiptext {
    position: absolute;
    ${({ size, left }) => {
      switch (size) {
        case 'Mini':
          return css`
            top: 20px;
            left: ${left ?? -50}px;
          `;
        case 'Tiny':
          return css`
            top: 22px;
            left: ${left ?? -48}px;
          `;
        case 'Small':
          return css`
            top: 24px;
            left: ${left ?? -48}px;
          `;
        case 'Regular':
          return css`
            top: 28px;
            left: ${left ?? -46}px;
          `;
        case 'Large':
          return css`
            top: 32px;
            left: ${left ?? -44}px;
          `;
        case 'Huge':
          return css`
            top: 40px;
            left: ${left ?? -40}px;
          `;
        default:
          return '';
      }
    }}
    z-index: ${ZIndexes.Tooltip};
    box-sizing: border-box;
    ${({ width }) =>
      css`
        width: ${width ?? 120}px;
      `}
    padding: 8px 16px;
    ${TypographyTokens.Label4}
    line-height: 1.4;
    color: white;
    visibility: hidden;
    background-color: ${ColorTokens.UiBackground01Dark};
    border-radius: 4px;

    &::before {
      position: absolute;
      top: 0;
      ${({ arrowLeft }) =>
        arrowLeft !== undefined
          ? css`
              left: ${arrowLeft};
            `
          : css`
              left: calc(50% - 14px);
            `}
      z-index: -10;
      width: 20px;
      height: 20px;
      content: '';
      background-color: ${ColorTokens.UiBackground01Dark};
      transform: rotate(45deg);
    }
  }

  &:hover .tooltiptext {
    visibility: visible;
  }

  &:hover svg {
    ${({ noChangeBackgroundColorOnHover }) =>
      noChangeBackgroundColorOnHover
        ? ''
        : css`
            background-color: ${ColorTokens.HoverSelectedUi};
          `}
    border-radius: ${BorderRadius.Default};
  }
`;
