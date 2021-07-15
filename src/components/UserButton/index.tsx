import { BorderRadius, ColorPalette, ColorTokens, TypographyTokens, space } from '@/styles';
import { UserIcon } from '..//UserIcon';
import { userDataType } from '@/components/userDataType';
import React from 'react';
import styled from 'styled-components';

export const UserButton = ({ name, userColor, imageUrl, isActive }: userDataType) => {
  return (
    <StyledButton>
      <UserIcon name={name} bgColor={userColor} imageUrl={imageUrl} size="small" isActive={isActive} />
      <StyledName>{name}</StyledName>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  padding: ${space(1)} ${space(2)};
  ${TypographyTokens.Label4};
  color: ${ColorTokens.Text03};
  background-color: transparent;
  border: none;
  border-radius: ${BorderRadius.Default};
  cursor: pointer;
  &:hover {
    background-color: ${ColorTokens.HoverUi};
  }
  &:active,
  &:focus {
    font-weight: bold;
    color: ${ColorPalette.Blue70};
    background-color: ${ColorPalette.Blue30};
  }
`;

const StyledName = styled.span`
  margin-left: ${space(2)};
`;
