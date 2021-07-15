/* eslint-disable react/require-default-props */
import { BorderRadius, ColorTokenType, ColorTokens, IconToken, TypographyTokens, space } from '@/styles';
import { Icon } from '@/components/Icon';
import { IconName } from '@Icon';
import React, { CSSProperties, ReactNode, useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const defaultDelayTime = 2000;

export type ButtonStyling = 'normal' | 'outline' | 'text';

export type ButtonColor = 'default' | 'danger';

type Props = {
  children?: ReactNode;
  href?: string;
  hrefTarget?: string;
  icon?: IconName;
  iconSize?: IconToken;
  iconPosition?: 'left' | 'right';
  iconColor?: ColorTokenType;
  badgeNumber?: number;
  badgeNoNumber?: boolean;
  widthStyle?: 'fit' | 'fill' | 'block';
  width?: CSSProperties['width'];
  isDisabled?: boolean;
  onClick?: () => void;
  styling?: ButtonStyling;
  delayTime?: number;
  color?: ButtonColor;
  padding?: string;
};

export const Button = ({
  children,
  href,
  hrefTarget = '_blank',
  icon,
  iconSize,
  iconPosition = 'left',
  badgeNumber,
  badgeNoNumber,
  widthStyle,
  width,
  onClick,
  isDisabled = false,
  styling = 'normal',
  delayTime = defaultDelayTime,
  color = 'default',
  iconColor,
  padding,
}: Props) => {
  const [isDisabledFromTimer, setIsDisabledFromTimer] = useState(false);

  useEffect(() => {
    if (!isDisabledFromTimer) {
      return undefined;
    }
    const buttonTimerId = setTimeout(() => {
      setIsDisabledFromTimer(false);
    }, delayTime);
    return () => {
      clearTimeout(buttonTimerId);
      setIsDisabledFromTimer(false);
    };
  }, [delayTime, isDisabledFromTimer]);

  const handleButtonClick = useCallback(() => {
    setIsDisabledFromTimer(true);

    if (onClick !== undefined) {
      onClick();
    }
  }, [onClick]);

  return (
    <ButtonWrapper
      href={href}
      hrefTarget={hrefTarget}
      onClick={handleButtonClick}
      styling={styling}
      isDisabled={isDisabled || isDisabledFromTimer}
      widthStyle={widthStyle}
      width={width}
      delayTime={delayTime}
      color={color}
      padding={padding}
    >
      {iconPosition === 'left' && icon !== undefined ? (
        <Icon
          name={icon}
          className="button-icon"
          size={iconSize}
          badgeNumber={badgeNumber}
          badgeNoNumber={badgeNoNumber}
          isDisabled={isDisabled}
          color={iconColor}
        />
      ) : null}
      {children !== undefined && children}
      {iconPosition === 'right' && icon !== undefined ? (
        <Icon
          name={icon}
          className="button-icon"
          size={iconSize}
          badgeNumber={badgeNumber}
          badgeNoNumber={badgeNoNumber}
          isDisabled={isDisabled}
        />
      ) : null}
    </ButtonWrapper>
  );
};

type ButtonWrapperProps = Pick<
  Props,
  'href' | 'hrefTarget' | 'onClick' | 'width' | 'widthStyle' | 'delayTime' | 'padding'
> &
  Required<Pick<Props, 'styling' | 'isDisabled' | 'color'>> & {
    children: ReactNode[];
  };

const ButtonWrapper = ({
  onClick,
  href,
  hrefTarget,
  children,
  styling,
  isDisabled,
  widthStyle,
  width,
  color,
  padding,
}: ButtonWrapperProps) => {
  const handleOnClick = useCallback(() => {
    if (onClick !== undefined) {
      onClick();
    }
    if (href !== undefined) {
      window.open(href, hrefTarget);
    }
  }, [onClick, href, hrefTarget]);

  return (
    <StyledButton
      color={color}
      onClick={handleOnClick}
      styling={styling}
      disabled={isDisabled}
      width={width}
      widthStyle={widthStyle}
      padding={padding}
      id={children.toString()}
    >
      {children}
    </StyledButton>
  );
};

const commonWrapperStyle = css<
  Pick<Props, 'width' | 'widthStyle' | 'padding'> & Required<Pick<Props, 'styling' | 'color'>>
>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  ${props =>
    props.padding !== undefined
      ? css`
          padding: ${props.padding};
        `
      : null}
  ${props =>
    props.widthStyle === 'fit'
      ? css`
          width: fit-content;
          padding: 0 ${space(6)};
        `
      : props.widthStyle === 'fill'
      ? css`
          width: auto;
          padding: 0 ${space(6)};
        `
      : css`
          width: 100%;
        `}

  ${props =>
    props.width !== undefined && props.widthStyle !== 'fit'
      ? css`
          width: ${props.width};
        `
      : null}
  ${TypographyTokens.Label2}
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  border: none;
  border-radius: ${BorderRadius.Default};
  outline: none;
  transition: all 0.15s ease;
  :disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
  ${({ styling, color }) => {
    switch (styling) {
      case 'normal':
        return css`
          color: ${ColorTokens.Text05};
          background-color: ${color === 'danger' ? ColorTokens.Danger : ColorTokens.Support02};
          & svg {
            fill: ${ColorTokens.Icon03};
          }
          &:hover {
            background-color: ${color === 'danger' ? ColorTokens.HoverDanger : ColorTokens.HoverPrimary};
          }
          &:disabled {
            background-color: ${ColorTokens.Disabled01};
          }
          &:active {
            background-color: ${color === 'danger' ? ColorTokens.ActiveDanger : ColorTokens.ActivePrimary};
          }
        `;
      case 'text':
        return css`
          color: ${color === 'danger' ? ColorTokens.Danger : ColorTokens.Interactive02};
          background-color: transparent;
          border: none;
          & svg {
            fill: ${color === 'danger' ? ColorTokens.Danger : ColorTokens.Icon01};
          }
          &:hover {
            color: ${color === 'danger' ? ColorTokens.HoverDanger : ColorTokens.HoverSecondary};
            background-color: transparent;
          }
          &:hover svg {
            fill: ${color === 'danger' ? ColorTokens.HoverDanger : ColorTokens.HoverSecondary};
          }
          &:disabled {
            color: ${ColorTokens.Disabled01};
            background-color: transparent;
          }
          &:disabled svg {
            fill: ${ColorTokens.Disabled01};
          }
          &:active {
            color: ${color === 'danger' ? ColorTokens.ActiveDanger : ColorTokens.ActiveSecondary};
            background-color: transparent;
          }
          &:active svg {
            fill: ${color === 'danger' ? ColorTokens.ActiveDanger : ColorTokens.ActiveSecondary};
          }
        `;
      case 'outline':
        return css`
          color: ${color === 'danger' ? ColorTokens.Danger : ColorTokens.Interactive02};
          background-color: ${ColorTokens.UiBackground01};
          border: 1px solid ${color === 'danger' ? ColorTokens.Danger : ColorTokens.Ui02};
          & svg {
            fill: ${color === 'danger' ? ColorTokens.Danger : ColorTokens.Icon01};
          }
          &:hover {
            color: ${color === 'danger' ? ColorTokens.HoverDanger : ColorTokens.HoverSecondary};
            background-color: ${ColorTokens.UiBackground01};
            border-color: ${color === 'danger' ? ColorTokens.HoverDanger : ColorTokens.HoverSecondary};
          }
          &:hover svg {
            fill: ${color === 'danger' ? ColorTokens.HoverDanger : ColorTokens.HoverSecondary};
          }
          &:disabled {
            color: ${ColorTokens.Disabled01};
            background-color: ${ColorTokens.UiBackground01};
            border: 1px solid ${ColorTokens.Disabled01};
          }
          &:disabled svg {
            fill: ${ColorTokens.Disabled01};
          }
          &:active {
            color: ${color === 'danger' ? ColorTokens.ActiveDanger : ColorTokens.ActiveSecondary};
            background-color: ${ColorTokens.UiBackground01};
            border-color: ${color === 'danger' ? ColorTokens.ActiveDanger : ColorTokens.ActiveSecondary};
          }
          &:active svg {
            fill: ${color === 'danger' ? ColorTokens.ActiveDanger : ColorTokens.ActiveSecondary};
          }
        `;
      default:
        return '';
    }
  }}

  .button-icon {
    display: flex;
    margin: 0 ${space(1)} 0 0;
  }
`;

const StyledButton = styled.button<
  Pick<Props, 'width' | 'widthStyle' | 'padding'> & Required<Pick<Props, 'styling' | 'color'>>
>`
  ${commonWrapperStyle}
`;
