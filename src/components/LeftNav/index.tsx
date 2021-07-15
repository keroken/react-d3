import { Button } from '@/components/Button';
import { ColorTokens, TypographyTokens, space } from '@/styles';
import { UserButton } from '@/components/UserButton';
import { userDataType } from '@/components/userDataType';
import React from 'react';
import styled from 'styled-components';

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
        <UserButton
          id={userData.id}
          name={userData.name}
          nameForIcon={userData.nameForIcon}
          userColor={userData.userColor}
          role={userData.role}
          team={userData.team}
          sessionCount={userData.sessionCount}
          lastSessionDate={userData.lastSessionDate}
          imageUrl={userData.imageUrl}
          value_a={userData.value_a}
          value_b={userData.value_b}
          isActive={userData.isActive}
        />
      </StyledNavHeader>
      <StyledButtonContainer>
        <Button styling="outline" icon="plus" widthStyle="fit">
          メンバーを追加
        </Button>
      </StyledButtonContainer>
      <StyledNavListTitle>あなたのチーム</StyledNavListTitle>
      <StyledNavList>
        {memberData.map(item => (
          <StyledListItem key={item.id}>
            <UserButton
              id={item.id}
              name={item.name}
              nameForIcon={item.nameForIcon}
              userColor={item.userColor}
              role={item.role}
              team={item.team}
              sessionCount={item.sessionCount}
              lastSessionDate={item.lastSessionDate}
              imageUrl={item.imageUrl}
              value_a={item.value_a}
              value_b={item.value_b}
              isActive={item.isActive}
            />
          </StyledListItem>
        ))}
      </StyledNavList>
      <StyledNavListTitle>その他のチーム</StyledNavListTitle>
      <StyledNavList>
        {memberDataOther.map(item => (
          <StyledListItem key={item.id}>
            <UserButton
              id={item.id}
              name={item.name}
              nameForIcon={item.nameForIcon}
              userColor={item.userColor}
              role={item.role}
              team={item.team}
              sessionCount={item.sessionCount}
              lastSessionDate={item.lastSessionDate}
              imageUrl={item.imageUrl}
              value_a={item.value_a}
              value_b={item.value_b}
              isActive={item.isActive}
            />
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
  background-color: ${ColorTokens.UiBackground02};
`;

const StyledNavHeader = styled.div`
  padding: ${space(10)} ${space(4)} ${space(6)};
  border-bottom: 1px solid ${ColorTokens.Ui01};
`;

const StyledButtonContainer = styled.div`
  padding: ${space(6)} ${space(4)};
`;

const StyledNavListTitle = styled.div`
  height: 32px;
  padding: ${space(3)} ${space(6)};
  ${TypographyTokens.Label5};
  color: ${ColorTokens.Text02};
`;

const StyledNavList = styled.ul`
  margin: 0;
  padding: ${space(4)};
`;

const StyledListItem = styled.li`
  margin-bottom: ${space(4)};
`;
