import { BorderRadius, ColorTokens, TypographyTokens, space } from '@/styles';
import { Icon } from '@/components/Icon';
import { LiveIconButton } from '@/components/LiveIconButton';
import { UserIcon } from '@/components/UserIcon';
import { format } from 'date-fns';
import { userDataType } from '@/components/userDataType';
import React from 'react';
import styled from 'styled-components';

type Props = {
  userData: userDataType;
  memberData: userDataType[];
};

export const ManagerListItem = ({ userData, memberData }: Props) => {
  return (
    <StyledTableRow>
      <StyledUserCell>
        <UserIcon
          name={userData.name}
          nameForIcon={userData.nameForIcon}
          bgColor="YellowGreen"
          imageUrl={userData.imageUrl}
          isActive={userData.isActive}
          size="regular"
        />
        <StyledNameContainer>
          <StyledMemberName>{userData.name}</StyledMemberName>
          <StyledTeamName>{userData.team}</StyledTeamName>
        </StyledNameContainer>
      </StyledUserCell>
      <StyledIconGroupCell>
        {memberData.map((member, index) =>
          index < 4 ? (
            <UserIcon
              key={member.id}
              name={member.name}
              nameForIcon={member.nameForIcon}
              size="regular"
              bgColor={member.userColor}
              imageUrl={member.imageUrl}
              showData
              dataValue={member.value_a}
            />
          ) : index === 4 ? (
            <StyledMoreIcon key={member.id} name="more" size="Large" />
          ) : null,
        )}
      </StyledIconGroupCell>
      <td>
        <StyledSessionCount>{userData.sessionCount}回</StyledSessionCount>
      </td>
      <td>
        <StyledLastSessionDate>{format(new Date(userData.lastSessionDate), "MM'月'dd'日'")}</StyledLastSessionDate>
      </td>
      <StyledIconButtonContainer>
        <LiveIconButton icon="more" size="regular" styling="light" id="more" />
      </StyledIconButtonContainer>
    </StyledTableRow>
  );
};

const StyledTableRow = styled.tr`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 ${space(2)};
  border-top: 1px solid lightGray;
  border-bottom: 1px solid lightGray;
`;

const StyledUserCell = styled.td`
  display: flex;
  align-items: flex-start;
  min-width: 200px;
  padding: ${space(3)} 0 ${space(2)};
`;

const StyledNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: ${space(2)};
`;

const StyledMemberName = styled.span`
  display: flex;
  align-items: center;
  width: 120px;
  margin-bottom: ${space(1)};
  ${TypographyTokens.Label3};
`;

const StyledTeamName = styled.span`
  ${TypographyTokens.Label6};
  color: ${ColorTokens.Text02};
`;

const StyledIconGroupCell = styled.td`
  display: flex;
  align-items: center;
  min-width: 220px;
  & > span {
    margin-right: ${space(1)};
  }
`;

const StyledSessionCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40px;
  margin-right: ${space(16)};
  ${TypographyTokens.Label4};
  color: ${ColorTokens.Text02};
  text-align: right;
`;

const StyledLastSessionDate = styled.div`
  display: flex;
  align-items: center;
  width: 60px;
  margin-right: ${space(16)};
  ${TypographyTokens.Label4};
  color: ${ColorTokens.Text02};
  text-align: right;
`;

const StyledIconButtonContainer = styled.td`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  & button:first-of-type {
    margin-right: ${space(4)};
  }
`;

const StyledMoreIcon = styled(Icon)`
  & {
    background-color: ${ColorTokens.Ui01};
    border-radius: ${BorderRadius.Circle};
  }
`;
