import {
  BorderRadius,
  ColorToken,
  ColorTokens,
  MediaDevice,
  StyleShadow,
  TransitionDurations,
  TransitionEasings,
  TransitionSpeeds,
  TypographyTokens,
  ZIndexes,
  space,
  square,
} from '@/styles';
import { Environment } from '@/utils/Environment';
import { Icon } from '@/components//Icon';
import { IconName, iconElements } from '@Icon';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import { createPortal } from 'react-dom';
import { rgba } from 'polished';
import React, { CSSProperties, MutableRefObject, ReactNode } from 'react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';

type WidthType = 'small' | 'regular-small' | 'regular' | 'wide';

type HeightType = 'fit' | 'fullscreen';

export type SizeProps = {
  width: WidthType;
  height: HeightType;
};

export type CommonModalProps = {
  children?: ReactNode | ReactNode[];
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
  keepOpen?: boolean;
  title?: ReactNode | ReactNode[];
  titleColor?: ColorToken;
  titleIcon?: IconName;
  titleIconColor?: ColorToken;
  showTopSeparationLine?: boolean;
  onModal?: boolean;
  size?: Partial<SizeProps>;
  maxHeight?: CSSProperties['height'];
  positionCss?: FlattenSimpleInterpolation;
  afterClosing?: () => void;
  portalTargetRef?: MutableRefObject<HTMLElement | null>;
  enableCloseButton?: boolean;
};

type Props = CommonModalProps &
  Partial<{
    titleBackground: ColorToken;
    titleColor: ColorToken;
    titleIcon: IconName;
    titleIconColor: ColorToken;
    centerTitle: boolean;
    baseBackground: 'black' | 'gray';
    noPaddingBottom: boolean;
  }>;

export const BasicModal = ({
  isOpen,
  setIsOpen,
  keepOpen = true,
  title,
  titleBackground,
  titleColor,
  titleIcon,
  titleIconColor,
  centerTitle = false,
  noPaddingBottom = false,
  children,
  afterClosing,
  showTopSeparationLine = true,
  onModal = false,
  baseBackground = 'gray',
  size,
  maxHeight,
  positionCss,
  portalTargetRef,
  enableCloseButton,
}: Props) => {
  const handleOnClose = () => {
    setIsOpen(false);
    if (afterClosing !== undefined) {
      afterClosing();
    }
  };

  return createPortal(
    <Transition in={isOpen} timeout={{ enter: 0, exit: TransitionDurations.Slow }} unmountOnExit={!keepOpen}>
      {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {(state: any) => (
        <StyledModalBase
          isOpen={isOpen}
          aboveModal={onModal}
          baseBackground={baseBackground}
          state={state}
          positionCss={positionCss}
        >
          <StyledModalContent
            isOpen={isOpen}
            size={size}
            hasTitle={title !== undefined}
            hasRef={portalTargetRef !== undefined}
            state={state}
            maxHeight={maxHeight}
            noPaddingBottom={noPaddingBottom}
          >
            {title !== undefined && (
              <StyledTitle
                showTopSeparationLine={showTopSeparationLine}
                centerTitle={centerTitle}
                titleBackground={titleBackground}
                titleColor={titleColor}
              >
                {titleIcon !== undefined && (
                  <StyledTitleIcon titleIconColor={titleIconColor}>{iconElements[titleIcon]}</StyledTitleIcon>
                )}
                {title}
                {!enableCloseButton && (
                  <StyledIcon titleColor={titleColor}>
                    <Icon name="close" onClick={handleOnClose} size="Large" />
                  </StyledIcon>
                )}
              </StyledTitle>
            )}
            <StyledBody>{children}</StyledBody>
          </StyledModalContent>
        </StyledModalBase>
      )}
    </Transition>,
    portalTargetRef === undefined || portalTargetRef.current === null ? document.body : portalTargetRef.current,
  );
};

export const BaseModalGutter = space(4);

const Dimensions = {
  BaseWidth: '90%',
  MaxHeight: '80%',
  MinHeight: '170px',
} as const;

const BaseWidth = css`
  width: ${Dimensions.BaseWidth};
`;

const Width: Record<WidthType, FlattenSimpleInterpolation> = {
  small: css`
    ${BaseWidth}
    @media screen and (${MediaDevice.xs}) {
      width: 320px;
    }
  `,
  'regular-small': css`
    ${BaseWidth}
    @media screen and (${MediaDevice.mds}) {
      width: 480px;
    }
  `,
  regular: css`
    ${BaseWidth}
    @media screen and (${MediaDevice.mds}) {
      width: 640px;
    }
  `,
  wide: css`
    ${BaseWidth}
    @media screen and (${MediaDevice.md}) {
      width: 840px;
    }
  `,
} as const;

const BaseTransition = `${TransitionSpeeds.Regular} ${TransitionEasings.Enter}`;

const StyledModalBase = styled.div<
  { aboveModal: boolean; state: TransitionStatus } & Pick<Props, 'isOpen' | 'baseBackground' | 'positionCss'>
>`
  z-index: ${props => (props.aboveModal ? ZIndexes.OnModal : ZIndexes.Modal)};
  display: flex;
  align-items: center;
  overflow: auto;
  visibility: hidden;
  opacity: 0;
  transition: ${!Environment.IE ? `visibility ${TransitionSpeeds.Slow},` : ''} opacity ${BaseTransition};
  ${({ baseBackground, positionCss }) =>
    positionCss === undefined
      ? css`
          ${square('100%')}
          position: fixed;
          top: 0;
          left: 0;
          background-color: ${baseBackground === 'black'
            ? rgba(0, 0, 0, 0.8)
            : rgba(ColorTokens.UiBackground01Dark, 0.9)};
        `
      : css`
          ${positionCss}
          box-shadow: ${StyleShadow.DropShadow24};
        `}
  ${({ state }) =>
    state === 'entered' &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

const StyledModalContent = styled.div<
  { state: TransitionStatus; hasTitle: boolean; hasRef: boolean } & Pick<
    Props,
    'isOpen' | 'size' | 'maxHeight' | 'noPaddingBottom' | 'children'
  >
>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props =>
    props.children !== undefined &&
    css`
      min-height: Dimensions.MinHeight;
    `}
  max-height: ${({ maxHeight }) => maxHeight ?? Dimensions.MaxHeight};
  margin: 0 auto;
  overflow: hidden;
  background: ${ColorTokens.UiBackground01};
  border-radius: ${BorderRadius.Double};
  transition: transform ${BaseTransition};
  transform: translate3d(0, -24px, 0);

  ${({ size, hasRef, maxHeight }) => css`
    height: ${size?.height === 'fullscreen' ? Dimensions.MaxHeight : maxHeight ?? 'auto'};
    ${hasRef
      ? css`
          width: 100%;
        `
      : css`
          ${Width[size?.width ?? 'regular']}
        `}
  `}

  ${({ hasTitle, noPaddingBottom }) => css`
    padding-top: ${hasTitle ? 0 : BaseModalGutter};
    padding-bottom: ${noPaddingBottom === true ? 0 : BaseModalGutter};
  `}

  ${({ state }) =>
    state === 'entered' &&
    css`
      transform: translate3d(0, 0, 0);
    `}
`;

const StyledBody = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  ${TypographyTokens.Body1}
  color: ${ColorTokens.Text02};
  white-space: pre-wrap;
`;

const StyledTitle = styled.div<{
  showTopSeparationLine: boolean;
  centerTitle: boolean;
  titleBackground: ColorToken | undefined;
  titleColor: ColorToken | undefined;
}>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: 100%;
  min-height: 46px;
  ${TypographyTokens.Label3}
  ${props =>
    props.centerTitle
      ? css`
          justify-content: center;
          padding: ${BaseModalGutter} ${space(9)};
          text-align: center;
        `
      : css`
          padding: ${BaseModalGutter} ${space(9)} ${BaseModalGutter} ${BaseModalGutter};
        `}
  color: ${props => (props.titleColor !== undefined ? ColorTokens[props.titleColor] : ColorTokens.Text01)};
  background-color: ${props =>
    props.titleBackground !== undefined ? ColorTokens[props.titleBackground] : ColorTokens.UiBackground01};
  ${props =>
    props.showTopSeparationLine !== false
      ? css`
          border-bottom: 1px solid ${ColorTokens.Ui01};
        `
      : null}
`;

const StyledTitleIcon = styled.span<{ titleIconColor: ColorToken | undefined }>`
  & svg {
    ${square(24)}
    margin-right: ${space(2)};
    fill: ${props => (props.titleIconColor !== undefined ? ColorTokens[props.titleIconColor] : ColorTokens.Icon01)};
  }
`;

const StyledIcon = styled.span<{ titleColor: ColorToken | undefined }>`
  position: absolute;
  right: 11px;
  svg {
    fill: ${props => (props.titleColor !== undefined ? ColorTokens[props.titleColor] : ColorTokens.Icon02)};
  }
  &:hover {
    cursor: pointer;
    background-color: ${ColorTokens.HoverSelectedUi};
    border-radius: ${BorderRadius.Default};
  }
`;
