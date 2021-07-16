import { BorderRadius, ColorTokens, StyleShadow, TypographyTokens, space } from '@/styles';
import { LiveIconButton } from '@/components/LiveIconButton';
import { RebiiLogo } from '@/components/Rebii_logo';
import { UserIcon } from '@/components//UserIcon';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { userDataType } from '@/components/userDataType';
import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  mode: 'admin' | 'manager' | 'member';
  notification: number;
  user: userDataType;
};

export const GlobalHeader = ({ mode, notification, user }: Props) => {
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const handleClickUserIcon = () => {
    setIsUserMenuVisible(prev => !prev);
  };
  const handleClickLogout = () => {
    setIsUserMenuVisible(false);
  };
  const handleOutsideClick = () => {
    setIsUserMenuVisible(false);
  };
  const listRef = useRef<HTMLUListElement>(null);
  useOutsideClick(listRef, handleOutsideClick, true);

  return (
    <StyledHeader>
      <StyledLogoContainer>
        <StyledTitleLabel>
          <RebiiLogo />
        </StyledTitleLabel>
      </StyledLogoContainer>
      {mode === 'admin' ? (
        <>
          <StyledButton>管理者</StyledButton>
          <StyledButton>1on1</StyledButton>
        </>
      ) : mode === 'manager' ? (
        <>
          <StyledButton>マネージメント</StyledButton>
          <StyledButton>1on1</StyledButton>
        </>
      ) : null}
      <StyledNavContainer>
        <StyledIcon>
          <LiveIconButton
            icon="notification"
            size="regular"
            styling="light"
            id="notification"
            notification={notification}
          />
        </StyledIcon>
        <StyledIcon>
          <LiveIconButton icon="help" size="regular" styling="light" id="help" />
        </StyledIcon>
        <StyledUserIcon onClick={handleClickUserIcon}>
          <UserIcon name={user.name} bgColor={user.userColor} imageUrl={user.imageUrl} isActive={false} size="small" />
        </StyledUserIcon>
        {isUserMenuVisible && (
          <StyledUserMenu ref={listRef}>
            <StyledMenuItem onClick={handleClickLogout}>ログアウト</StyledMenuItem>
          </StyledUserMenu>
        )}
      </StyledNavContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  z-index: 10;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 ${space(8)};
  background-color: ${ColorTokens.UiBackground01};
  border-bottom: 1px solid ${ColorTokens.Ui01};
`;

const StyledTitleLabel = styled.span`
  margin-right: ${space(24)};
  ${TypographyTokens.Heading1}
  line-height: 1;
  color: ${ColorTokens.Text01};
`;

const StyledLogoContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 32px;
  padding: ${space(4)};
  margin-right: ${space(6)};
  ${TypographyTokens.Label4};
  color: ${ColorTokens.Text03};
  background-color: ${ColorTokens.UiBackground01};
  border: none;
  border-radius: ${BorderRadius.Default};
  cursor: pointer;
  &:hover {
    background-color: ${ColorTokens.HoverUi};
  }
  &:active,
  &:focus {
    color: ${ColorTokens.Text04};
    background-color: ${ColorTokens.HoverUi};
  }
`;

const StyledNavContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: auto;
`;

const StyledIcon = styled.span`
  margin-right: ${space(4)};
`;

const StyledUserIcon = styled.span<{ onClick: () => void }>`
  padding: ${space(1)};
  border-radius: ${BorderRadius.Default};
  ${props =>
    props.onClick !== undefined &&
    css`
      cursor: pointer;
      &:hover {
        background-color: ${ColorTokens.HoverUi};
      }
    `}
`;

const StyledUserMenu = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 52px;
  right: ${space(1)};
  height: 32px;
  margin: 0;
  padding: 0;
  background-color: ${ColorTokens.UiBackground01};
  border: 1px solid ${ColorTokens.Ui01};
  border-radius: ${BorderRadius.Default};
  box-shadow: ${StyleShadow.DropShadow10};
`;

const StyledMenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 32px;
  padding: 0 ${space(4)};
  ${TypographyTokens.Label4};
  color: ${ColorTokens.Text03};
  list-style-type: none;
  cursor: pointer;
  border-bottom: 1px solid ${ColorTokens.Ui01};
  &:last-of-type {
    border-bottom: none;
  }
  &:hover {
    background-color: ${ColorTokens.HoverUi};
  }
`;
