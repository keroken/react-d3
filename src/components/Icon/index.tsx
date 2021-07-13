import { Badge } from '@/components/Badge';
import {
  BorderRadius,
  ColorPalette,
  ColorTokenType,
  ColorTokens,
  IconToken,
  IconTokens,
  ZIndexes,
  square,
} from '@/styles';
import { IconName, iconElements } from '@Icon';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  name: IconName;
  badgeNumber?: number;
  badgeNoNumber?: boolean;
  color?: ColorTokenType;
  size?: IconToken;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string;
  isDisabled?: boolean;
};

export const Icon = ({
  name,
  badgeNumber,
  badgeNoNumber,
  color,
  size,
  href,
  onClick,
  className,
  isDisabled,
}: Props) => {
  const onClickHandler = onClick !== undefined && isDisabled !== true ? onClick : undefined;
  return (
    <IconWrapper
      onClick={onClickHandler !== undefined ? e => onClickHandler(e) : undefined}
      size={size}
      href={href}
      className={`${className ?? ''} ${name}Icon`}
      color={color}
      isDisabled={isDisabled}
      name={name}
    >
      {badgeNumber !== undefined && badgeNumber > 0 ? (
        badgeNoNumber === undefined || badgeNoNumber === false ? (
          <StyledBadge>
            <Badge number={badgeNumber} isDisabled={isDisabled} />
          </StyledBadge>
        ) : (
          <StyledSmallBage isDisabled={isDisabled} />
        )
      ) : null}
      {iconElements[name]}
    </IconWrapper>
  );
};

const IconWrapper = ({
  onClick,
  href,
  children,
  size,
  color,
  className,
  isDisabled,
  name,
}: Pick<Props, 'onClick' | 'href' | 'size' | 'color' | 'className' | 'isDisabled' | 'name'> & {
  children: ReactNode[];
}) => {
  if (href === undefined) {
    return (
      <StyledIcon className={className} onClick={onClick} size={size} color={color} isDisabled={isDisabled} name={name}>
        {children}
      </StyledIcon>
    );
  }
  return (
    <StyledLinkIcon
      className={className}
      onClick={onClick}
      size={size}
      color={color}
      href={href}
      isDisabled={isDisabled}
      name={name}
    >
      {children}
    </StyledLinkIcon>
  );
};

const iconWrapperCommonStyle = css<Pick<Props, 'size' | 'color' | 'onClick' | 'isDisabled' | 'name'>>`
  position: relative;
  display: flex;
  justify-content: center;
  margin: auto 0;
  color: ${({ isDisabled }) =>
    isDisabled !== undefined && isDisabled === true ? ColorTokens.Icon02 : ColorTokens.Icon01};
  svg {
    ${({ size }) => (size !== undefined ? square(IconTokens[size]) : square(24))}
    ${({ name, color, isDisabled }) =>
      name === 'checkbox-off'
        ? `
        fill: ${ColorPalette.White};
        rect {
          stroke:${
            isDisabled !== undefined && isDisabled === true
              ? ColorTokens.Disabled01
              : color !== undefined
              ? ColorTokens[color]
              : ColorTokens.Icon01
          };
        }`
        : name === 'checkbox-on' || name === 'checkbox-minus'
        ? `
        fill: ${ColorPalette.White};
        rect {
          fill:${
            isDisabled !== undefined && isDisabled === true
              ? ColorTokens.Disabled01
              : color !== undefined
              ? ColorTokens[color]
              : ColorTokens.Icon01
          };
          stroke:${
            isDisabled !== undefined && isDisabled === true
              ? ColorTokens.Disabled01
              : color !== undefined
              ? ColorTokens[color]
              : ColorTokens.Icon01
          };
        }`
        : `fill: ${
            isDisabled !== undefined && isDisabled === true
              ? ColorTokens.Disabled01
              : color !== undefined
              ? ColorTokens[color]
              : ColorTokens.Icon01
          };`}
    ${({ onClick }) => (onClick !== undefined ? `&:hover {cursor: pointer}` : null)}
  }
`;

const StyledBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -4px;
  z-index: ${ZIndexes.Badge};
`;

const StyledSmallBage = styled.span<{ isDisabled?: boolean }>`
  position: absolute;
  top: 2px;
  right: 0;
  ${square(8)}
  background-color: ${({ isDisabled }) =>
    isDisabled !== undefined && isDisabled === true ? ColorTokens.Icon02 : ColorTokens.Danger};
  border-radius: ${BorderRadius.Circle};
`;

const StyledIcon = styled.span<Pick<Props, 'size' | 'color' | 'onClick' | 'isDisabled' | 'name'>>`
  ${iconWrapperCommonStyle}
`;

const StyledLinkIcon = styled.a<Pick<Props, 'size' | 'color' | 'onClick' | 'isDisabled' | 'name'>>`
  ${iconWrapperCommonStyle}
  svg:hover {
    background-color: ${ColorTokens.Ui02};
    border-radius: ${BorderRadius.Default};
  }
`;
