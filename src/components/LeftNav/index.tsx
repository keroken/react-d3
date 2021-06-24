import { UserButton } from '../UserButton';
import React from 'react';
import styled from 'styled-components';

export type userDataType = {
  id: number;
  name: string;
  role: string;
  team: string;
  sessionCount: number;
  lastSessionDate: string;
  imageUrl: string;
  value_a: number;
  value_b: number;
  isActive: boolean;
};

type Props = {
  userData: userDataType;
  memberData: userDataType[];
  memberDataOther: userDataType[];
};

export const LeftNav = (data: Props) => {
  const { userData, memberData, memberDataOther } = data;
  return (
    <StyledNavContainer>
      <StyledNavHeader>
        <UserButton name={userData.name} imageUrl={userData.imageUrl} isActive={userData.isActive} />
      </StyledNavHeader>
      <StyledNavListTitle>あなたのチーム</StyledNavListTitle>
      <StyledNavList>
        {memberData.map(item => (
          <StyledListItem key={item.id}>
            <UserButton name={item.name} imageUrl={item.imageUrl} isActive={item.isActive} />
          </StyledListItem>
        ))}
      </StyledNavList>
      <StyledNavListTitle>その他のチーム</StyledNavListTitle>
      <StyledNavList>
        {memberDataOther.map(item => (
          <StyledListItem key={item.id}>
            <UserButton name={item.name} imageUrl={item.imageUrl} isActive={item.isActive} />
          </StyledListItem>
        ))}
      </StyledNavList>
    </StyledNavContainer>
  );
};

const StyledNavContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 264px;
  height: 100vh;
  background-color: #F3F4F5;
`;

const StyledNavHeader = styled.div`
  padding: 80px 16px 24px;
  border-bottom: 1px solid #DEDFE0;
`;

const StyledNavListTitle = styled.div`
  height: 32px;
  padding: 12px 24px;
  font-size: 11px;
  font-weight: normal;
  line-height: 11px;
  color: #838789;
`;

const StyledNavList = styled.ul`
  margin: 0;
  padding: 16px;
  list-style: none;
`;

const StyledListItem = styled.li`
  margin-bottom: 16px;
`;
