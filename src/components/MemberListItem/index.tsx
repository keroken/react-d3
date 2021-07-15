import { ColorTokens, TypographyTokens, space } from '@/styles';
import { HorizontalBarUnit } from '../HorizontalBarUnit';
import { LiveIconButton } from '@/components/LiveIconButton';
import { UserIcon } from '@/components/UserIcon';
import { format } from 'date-fns';
import { userDataType } from '@/components/userDataType';
import React from 'react';
import styled from 'styled-components';

type Props = {
  data: userDataType;
};

export const MemberListItem = (memberData: Props) => {
  const { data } = memberData;
  return (
    <StyledTableRow>
      <td>
        <UserIcon
          name={data.name}
          bgColor="YellowGreen"
          imageUrl={data.imageUrl}
          isActive={data.isActive}
          size="regular"
        />
      </td>
      <td>
        <StyledMemberName>{data.name}</StyledMemberName>
      </td>
      <td>
        <StyledMemberRole>{data.role}</StyledMemberRole>
      </td>
      <td>
        <StyledSessionCount>{data.sessionCount}</StyledSessionCount>
      </td>
      <td>
        <StyledBarUnit>
          <HorizontalBarUnit unitValue={64} graphRatio={96} color="#69AEF8" />
        </StyledBarUnit>
      </td>
      <td>
        <StyledBarUnit>
          <HorizontalBarUnit unitValue={48} graphRatio={96} color="#17D4E5" />
        </StyledBarUnit>
      </td>
      <td>
        <StyledLastSessionDate>{format(new Date(data.lastSessionDate), "MM'月'dd'日'")}</StyledLastSessionDate>
      </td>
      <StyledIconButtonContainer>
        <LiveIconButton icon="link" size="regular" styling="light" id="link" />
        <LiveIconButton icon="more" size="regular" styling="light" id="more" />
      </StyledIconButtonContainer>
    </StyledTableRow>
  );
};

const StyledTableRow = styled.tr`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 ${space(2)};
  border-top: 1px solid lightGray;
  border-bottom: 1px solid lightGray;
`;

const StyledMemberName = styled.span`
  display: flex;
  align-items: center;
  width: 120px;
  margin-left: ${space(3)};
  ${TypographyTokens.Label3};
`;

const StyledMemberRole = styled.span`
  display: flex;
  align-items: center;
  width: 80px;
  ${TypographyTokens.Label4};
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

const StyledBarUnit = styled.div`
  margin-right: ${space(16)};
`;

const StyledLastSessionDate = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
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