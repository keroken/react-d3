import { UserIcon } from '..//UserIcon';
import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  imageUrl: string;
  isActive: boolean;
};

export const UserButton = ({ name, imageUrl, isActive }: Props) => {
  return (
    <StyledButton>
      <UserIcon imageUrl={imageUrl} size="small" isActive={isActive} />
      <StyledName>{name}</StyledName>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: normal;
  line-height: 12px;
  color: #7C868A;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #E9EAEB;
  }
  &:active,
  &:focus {
    font-weight: bold;
    color: #246BB2;
    background-color: #B9D8F7;
  }
`;

const StyledName = styled.span`
  margin-left: 8px;
`;
