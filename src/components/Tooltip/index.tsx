import { BorderRadius, ColorTokens, TypographyTokens, space, square } from '@/styles';
import { Icon } from '@/components/Icon';
import React, { ReactNode, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children: ReactNode;
  show?: boolean;
  height: string;
  width?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  direction?: 'upward' | 'downward';
  multiline?: boolean;
  withCloseButton?: boolean;
  backgroundColor?: boolean;
  className?: string;
  wordBreak?: boolean;
};

export const Tooltip = ({
  children,
  show = true,
  height,
  width = 'auto',
  top = '',
  bottom = '',
  left = '',
  right = '',
  direction = 'downward',
  multiline = false,
  withCloseButton = false,
  backgroundColor = false,
  className,
  wordBreak = true,
}: Props) => {
  const [isOpen, setIsOpen] = useState(show);

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  return (
    <>
      {isOpen ? (
        <StyledMessageContainer
          show={isOpen}
          top={top}
          bottom={bottom}
          left={left}
          right={right}
          className={className}
          wordBreak={wordBreak}
        >
          <StyledContentContainer>
            {withCloseButton && (
              <StyledCloseButton
                color="Icon03"
                size="Small"
                name="close"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            )}
            <StyledMessage
              height={height}
              width={width}
              multiline={multiline}
              backgroundColor={backgroundColor}
              direction={direction}
            >
              {children}
            </StyledMessage>
          </StyledContentContainer>
        </StyledMessageContainer>
      ) : null}
    </>
  );
};

type MessageProps = {
  height: string;
  width: string;
  multiline: boolean;
  backgroundColor: boolean;
  direction: 'upward' | 'downward';
};
const StyledMessage = styled.div<MessageProps>`
  z-index: 100;
  display: inline-block;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 0 8px;
  ${TypographyTokens.Label2}
  line-height: ${props => (!props.multiline ? props.height : 'inherit')};
  color: ${ColorTokens.Text05};
  text-align: center;
  background-color: ${props => (!props.backgroundColor ? ColorTokens.Interactive04 : ColorTokens.UiBackground01Dark)};
  border-radius: ${BorderRadius.Default};

  &::after {
    position: absolute;
    top: ${props => (props.direction === 'upward' ? '-4px' : `calc(${props.height} - 5px)`)};
    left: calc(50% - 4px);
    display: inline-block;
    ${square(8)}
    content: '';
    background-color: ${props => (!props.backgroundColor ? ColorTokens.Interactive04 : ColorTokens.UiBackground01Dark)};
    transform: rotate(45deg);
  }
`;

type MessageContainerProps = {
  show: boolean;
  top: string;
  bottom: string;
  left: string;
  right: string;
  wordBreak: boolean;
};
const StyledMessageContainer = styled.div<MessageContainerProps>`
  ${({ show }) => {
    if (show) {
      return css`
        display: flex;
      `;
    }
    return css`
      display: none;
    `;
  }}
  position: absolute;
  ${({ top }) => {
    if (top !== '') {
      return css`
        top: ${top};
      `;
    }
    return css`
      top: unset;
    `;
  }}
  ${({ bottom }) => {
    if (bottom !== '') {
      return css`
        bottom: ${bottom};
      `;
    }
    return css`
      bottom: unset;
    `;
  }}
  ${({ left }) => {
    if (left !== '') {
      return css`
        left: ${left};
      `;
    }
    return css`
      left: unset;
    `;
  }}
  ${({ right }) => {
    if (right !== '') {
      return css`
        right: ${right};
      `;
    }
    return css`
      right: unset;
    `;
  }}
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${props =>
    props.wordBreak
      ? ''
      : css`
          word-break: keep-all;
        `}
`;

const StyledCloseButton = styled(Icon)`
  position: absolute;
  top: ${space(1)};
  right: ${space(1)};
`;

const StyledContentContainer = styled.div`
  position: relative;
`;
