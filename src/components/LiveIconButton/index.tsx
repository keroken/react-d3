import { BorderRadius, ColorTokens, square } from '@/styles';
import { Icon } from '@/components/Icon';
import { IconName } from '@Icon';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  id: string;
  href?: string;
  icon: IconName;
  size: 'small' | 'regular' | 'large';
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  styling?: 'dark' | 'grey' | 'light' | 'transparent';
  notification?: number;
};

export const LiveIconButton = ({
  href,
  icon,
  size,
  className,
  onClick,
  isDisabled = false,
  styling = 'dark',
  id,
  notification,
}: Props) => (
  <ButtonWrapper
    href={href}
    size={size}
    className={className}
    onClick={onClick}
    styling={styling}
    isDisabled={isDisabled}
    id={id}
  >
    {size === 'regular' ? (
      <Icon name={icon} className="button-icon" size="Large" badgeNumber={notification} />
    ) : (
      <Icon name={icon} className="button-icon" size="Huge" badgeNumber={notification} />
    )}
  </ButtonWrapper>
);

type ButtonWrapperProps = Pick<Props, 'href' | 'onClick' | 'className'> &
  Required<Pick<Props, 'size' | 'styling' | 'isDisabled' | 'id'>> & {
    children: ReactNode;
  };

const ButtonWrapper = ({ children, size, className, onClick, href, styling, isDisabled, id }: ButtonWrapperProps) => {
  if (href === undefined) {
    return (
      <StyledButton size={size} className={className} onClick={onClick} styling={styling} disabled={isDisabled} id={id}>
        {children}
      </StyledButton>
    );
  }
  return (
    <StyledLinkButton
      size={size}
      className={className}
      onClick={onClick}
      styling={styling}
      href={isDisabled ? undefined : href}
    >
      {children}
    </StyledLinkButton>
  );
};

const commonWrapperStyle = css<Required<Pick<Props, 'size' | 'styling'>>>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          ${square(48)}
          border-radius: ${BorderRadius.Double};
        `;
      case 'small':
        return css`
          ${square(24)}
          border-radius: ${BorderRadius.Default};
        `;
      default:
        return css`
          ${square(32)}
          border-radius: ${BorderRadius.Default};
        `;
    }
  }}
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.15s ease;
  :disabled {
    pointer-events: none;
    cursor: not-allowed;
  }

  ${({ styling }) => {
    switch (styling) {
      case 'dark':
        return css`
          color: ${ColorTokens.Text05};
          background-color: ${ColorTokens.UiBackground01Dark};
          & svg {
            fill: ${ColorTokens.Icon03};
          }
          &:hover {
            background-color: ${ColorTokens.Icon01};
          }
          &:disabled {
            background-color: ${ColorTokens.Disabled03};
          }
          &:disabled svg {
            fill: ${ColorTokens.Icon01};
          }
          &:active {
            background-color: ${ColorTokens.Text02};
          }
        `;
      case 'grey':
        return css`
          color: ${ColorTokens.Text04};
          background-color: ${ColorTokens.Interactive02};
          & svg {
            fill: ${ColorTokens.Icon03};
          }
          &:hover {
            background-color: ${ColorTokens.Icon01};
          }
          &:disabled {
            background-color: ${ColorTokens.Disabled03};
          }
          &:disabled svg {
            fill: ${ColorTokens.Icon01};
          }
          &:active {
            background-color: ${ColorTokens.Text02};
          }
        `;
      case 'light':
        return css`
          color: ${ColorTokens.Interactive02};
          background-color: ${ColorTokens.UiBackground01};
          border: none;
          & svg {
            fill: ${ColorTokens.Icon01};
          }
          &:hover {
            color: ${ColorTokens.Icon01};
            background-color: ${ColorTokens.HoverUi};
          }
          &:hover svg {
            fill: ${ColorTokens.Icon01};
          }
          &:disabled {
            color: ${ColorTokens.Icon01};
            background-color: ${ColorTokens.Disabled01};
          }
          &:disabled svg {
            fill: ${ColorTokens.Icon01};
          }
          &:active {
            color: ${ColorTokens.Interactive02};
            background-color: ${ColorTokens.UiBackground01};
          }
          &:active svg {
            fill: ${ColorTokens.ActiveSecondary};
          }
        `;
      case 'transparent':
        return css`
          color: ${ColorTokens.Interactive02};
          background-color: transparent;
          border: none;
          & svg {
            fill: ${ColorTokens.Icon01};
          }
          &:hover {
            color: ${ColorTokens.HoverSecondary};
            background-color: ${ColorTokens.UiBackground01};
            border-color: ${ColorTokens.HoverSecondary};
          }
          &:hover svg {
            fill: ${ColorTokens.HoverSecondary};
          }
          &:disabled {
            color: ${ColorTokens.Ui02};
            background-color: ${ColorTokens.Disabled01};
            border: 1px solid ${ColorTokens.Ui02};
          }
          &:disabled svg {
            fill: ${ColorTokens.Icon03};
          }
          &:active {
            color: ${ColorTokens.ActiveSecondary};
            background-color: ${ColorTokens.UiBackground01};
            border-color: ${ColorTokens.ActiveSecondary};
          }
          &:active svg {
            fill: ${ColorTokens.ActiveSecondary};
          }
        `;
      default:
        return '';
    }
  }}

  svg {
    ${props => (props.size === 'small' ? square(16) : props.size === 'regular' ? square(24) : square(32))}
  }
`;

const StyledButton = styled.button<Required<Pick<Props, 'size' | 'styling'>>>`
  ${commonWrapperStyle}
  padding:0;
`;

const StyledLinkButton = styled.a<Required<Pick<Props, 'size' | 'styling'>>>`
  ${commonWrapperStyle}
`;
