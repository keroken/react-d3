import { BaseModalGutter, BasicModal, CommonModalProps } from '@/components/BasicModal';
import { Button, ButtonColor, ButtonStyling } from '@/components/Button';
import { ColorTokens, MediaDevice, TypographyTokens, space } from '@/styles';
import { IconName } from '@Icon';
import React from 'react';
import styled, { css } from 'styled-components';

type Props = CommonModalProps & {
  centerTitle?: boolean;
  centerContent?: boolean;
  centerButtons?: boolean;
  showBottomSeparationLine?: boolean;
  imageUrl?: string;
  imageOnBottom?: boolean;
  buttonPadding?: 'regular' | 'wide';
  noPadding?: boolean;
  bodyHeightFull?: boolean;
  noBody?: boolean;

  mainButtonLabel?: string;
  mainButtonIcon?: IconName;
  mainButtonWidth?: string;
  mainButtonWidthStyle?: 'fit' | 'fill' | 'block';
  mainButtonColor?: ButtonColor;
  mainButtonStyling?: ButtonStyling;
  onClickMainButton: () => void;
  mainButtonIsDisabled?: boolean;

  secondaryButtonLabel?: string;
  secondaryButtonIcon?: IconName;
  secondaryButtonWidth?: string;
  secondaryButtonWidthStyle?: 'fit' | 'fill' | 'block';
  secondaryButtonStyling?: ButtonStyling;
  secondaryButtonIsDisabled?: boolean;
  onClickSecondaryButton?: () => void;
  buttonsDelayTime?: number;

  leftButtonLabel?: string;
  leftButtonIcon?: IconName;
  leftButtonWidth?: string;
  leftButtonWidthStyle?: 'fill' | 'block';
  leftButtonStyling?: ButtonStyling;
  leftButtonAlignLeft?: boolean;
  onClickLeftButton?: () => void;
};

export const ModalSelect = ({
  isOpen,
  setIsOpen,
  keepOpen = true,
  title,
  titleColor,
  titleIcon,
  titleIconColor,
  centerTitle,
  centerContent,
  centerButtons,
  showBottomSeparationLine = false,
  showTopSeparationLine = false,
  children,
  onClickSecondaryButton,
  onClickMainButton,
  onClickLeftButton,
  mainButtonIcon,
  secondaryButtonIcon,
  leftButtonIcon,
  mainButtonLabel,
  secondaryButtonLabel,
  leftButtonLabel,
  mainButtonWidth,
  secondaryButtonWidth,
  leftButtonWidth,
  leftButtonAlignLeft = false,
  mainButtonWidthStyle,
  secondaryButtonWidthStyle,
  leftButtonWidthStyle,
  mainButtonStyling = 'normal',
  secondaryButtonStyling = 'outline',
  leftButtonStyling = 'outline',
  mainButtonColor = 'default',
  mainButtonIsDisabled = false,
  secondaryButtonIsDisabled = false,
  imageUrl,
  imageOnBottom = false,
  onModal,
  buttonPadding,
  afterClosing,
  noPadding = false,
  noBody = false,
  bodyHeightFull,
  buttonsDelayTime,
  size,
  maxHeight,
  positionCss,
  portalTargetRef,
}: Props) => {
  const showSecondaryButton = secondaryButtonLabel !== undefined;
  const showLeftbutton = leftButtonLabel !== undefined;
  const oneButton = !showSecondaryButton && !showLeftbutton;

  return (
    <BasicModal
      title={title}
      titleColor={titleColor}
      titleIcon={titleIcon}
      titleIconColor={titleIconColor}
      centerTitle={centerTitle}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      keepOpen={keepOpen}
      onModal={onModal}
      afterClosing={afterClosing}
      showTopSeparationLine={showTopSeparationLine}
      size={size}
      maxHeight={maxHeight}
      positionCss={positionCss}
      portalTargetRef={portalTargetRef}
      noPaddingBottom
    >
      <StyledContainer>
        {!noBody && (
          <StyledBodyContainer noPadding={noPadding}>
            {imageUrl !== undefined && !imageOnBottom ? (
              <StyledImageContainer>
                <StyledImage url={imageUrl} />
              </StyledImageContainer>
            ) : null}
            <StyledBodyContent centerContent={centerContent} bodyHeightFull={bodyHeightFull}>
              {children}
            </StyledBodyContent>
            {imageUrl !== undefined && imageOnBottom ? (
              <StyledImageContainer>
                <StyledImage url={imageUrl} />
              </StyledImageContainer>
            ) : null}
          </StyledBodyContainer>
        )}
        <StyledButtonContainer
          centerButtons={centerButtons}
          oneButton={oneButton}
          showBottomSeparationLine={showBottomSeparationLine}
          buttonPadding={buttonPadding}
          leftButtonAlignLeft={leftButtonAlignLeft}
        >
          {showLeftbutton && (
            <StyledLeftButtonContainer>
              <Button
                onClick={onClickLeftButton}
                styling={leftButtonStyling}
                icon={leftButtonIcon}
                width={leftButtonWidth !== undefined ? leftButtonWidth : '140px'}
                widthStyle={leftButtonWidthStyle}
                delayTime={buttonsDelayTime}
              >
                {leftButtonLabel}
              </Button>
            </StyledLeftButtonContainer>
          )}
          <StyledRightButtonContainer leftButtonAlignLeft={leftButtonAlignLeft} oneButton={oneButton}>
            {showSecondaryButton && (
              <Button
                onClick={onClickSecondaryButton}
                styling={secondaryButtonStyling}
                icon={secondaryButtonIcon}
                width={secondaryButtonWidth !== undefined ? secondaryButtonWidth : '140px'}
                widthStyle={secondaryButtonWidthStyle}
                isDisabled={secondaryButtonIsDisabled}
                delayTime={buttonsDelayTime}
              >
                {secondaryButtonLabel}
              </Button>
            )}
            <Button
              delayTime={buttonsDelayTime}
              onClick={onClickMainButton}
              styling={mainButtonStyling}
              icon={mainButtonIcon}
              width={mainButtonWidth !== undefined ? mainButtonWidth : '140px'}
              widthStyle={mainButtonWidthStyle}
              color={mainButtonColor}
              isDisabled={mainButtonIsDisabled}
            >
              {mainButtonLabel}
            </Button>
          </StyledRightButtonContainer>
        </StyledButtonContainer>
      </StyledContainer>
    </BasicModal>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const StyledBodyContainer = styled.div<Pick<Props, 'noPadding'>>`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${props => (props.noPadding === true ? 0 : BaseModalGutter)};
  padding-top: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const StyledBodyContent = styled.div<Pick<Props, 'centerContent' | 'bodyHeightFull'>>`
  display: flex;
  ${props =>
    props.centerContent &&
    css`
      align-items: center;
      flex-direction: column;
    `};
  ${props => (props.bodyHeightFull ? null : 'height: 100%')};
  ${TypographyTokens.Body1}
  color: ${ColorTokens.Text02};
  white-space: pre-wrap;
`;

const StyledButtonContainer = styled.div<
  {
    oneButton: boolean;
    showBottomSeparationLine: boolean;
    buttonPadding?: 'regular' | 'wide';
  } & Pick<Props, 'centerButtons' | 'leftButtonAlignLeft'>
>`
  display: flex;
  ${props =>
    props.centerButtons &&
    css`
      align-items: center;
      flex-direction: column;
    `}
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${ColorTokens.UiBackground01};
  @media screen and (${MediaDevice.sm}) {
    flex-wrap: nowrap;
    ${props =>
      props.leftButtonAlignLeft === true
        ? css`
            justify-content: space-between;
          `
        : css`
            justify-content: flex-end;
          `}

    button:first-child {
      margin-right: ${space(4)};
    }
    ${props =>
      props.oneButton &&
      css`
        flex-direction: column;
        align-items: center;
      `}
  }
  ${props =>
    props.buttonPadding === 'wide'
      ? css`
          padding: ${space(6)};
        `
      : css`
          padding: ${BaseModalGutter};
        `}
  ${props =>
    props.showBottomSeparationLine
      ? css`
          border-top: 1px solid ${ColorTokens.Ui01};
        `
      : null}
`;

const StyledRightButtonContainer = styled.div<
  {
    oneButton: boolean;
  } & Pick<Props, 'leftButtonAlignLeft'>
>`
  display: flex;
  align-items: center;
  width: 100%;
  ${({ oneButton }) =>
    oneButton
      ? css`
          justify-content: center;
        `
      : css`
          justify-content: space-between;
        `}
  @media screen and (${MediaDevice.sm}) {
    justify-content: flex-end;
    width: auto;
  }

  ${({ leftButtonAlignLeft }) =>
    leftButtonAlignLeft === true &&
    css`
      margin-left: auto;
    `}
`;

const StyledLeftButtonContainer = styled.div`
  width: 100%;
  margin-bottom: ${space(4)};

  @media (${MediaDevice.sm}) {
    width: auto;
    margin-bottom: 0;
  }
`;

const StyledImageContainer = styled.div`
  display: flex;
  margin: 0 -${BaseModalGutter};
`;

const StyledImage = styled.div<{ url: string }>`
  width: 100%;
  min-height: 240px;
  background: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
