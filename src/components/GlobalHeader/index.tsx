import { RebiiLogo } from '../Rebii_logo';
import { UserIcon } from '../UserIcon';
import { userDataType } from '../LeftNav';
import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  mode: 'admin' | 'manager' | '1on1';
  notification: number;
  user: userDataType;
};

export const GlobalHeader = ({ mode, notification, user }: Props) => {
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
          <StyledButton style={{ width: '160px' }}>マネージメント</StyledButton>
          <StyledButton>1on1</StyledButton>
        </>
      ) : mode === 'manager' ? (
        <>
          <StyledButton>マネージメント</StyledButton>
          <StyledButton>1on1</StyledButton>
        </>
      ) : (
        <StyledButton>1on1</StyledButton>
      )}
      <StyledNavContainer>
        <StyledUserIcon onClick={() => alert('clicked')}>
          <UserIcon name={user.name} bgColor="lightblue" imageUrl={user.imageUrl} isActive={false} size="small" />
        </StyledUserIcon>
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
  padding: 0 32px;
  background-color: #FFFFFF;
  border-bottom: 1px solid #DEDFE0;
`;

const StyledTitleLabel = styled.span`
  margin-right: 96px;
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  line-height: 1;
  color: #2F3233;
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
  padding: 16px;
  font-size: 12px;
  font-weight: normal;
  line-height: 12px;
  color: #2F3233;
  background-color: #FFFFFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #E9EAEB;
  }
  &:active,
  &:focus {
    color: #CACCCD;
    background-color: #E9EAEB;
  }
`;

const StyledNavContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: auto;
`;

const StyledUserIcon = styled.span<{ onClick: () => void }>`
  padding: 4px;
  border-radius: 4px;
  ${props =>
    props.onClick !== undefined &&
    css`
      cursor: pointer;
      &:hover {
        background-color: #E9EAEB;
      }
    `}
`;
