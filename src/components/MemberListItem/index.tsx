
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
      <StyledTableCell>
        <UserIcon
            name={data.name}
            bgColor="YellowGreen"
            imageUrl={data.imageUrl}
            isActive={data.isActive}
            size="regular"
          />
      </StyledTableCell>
      <StyledTableCell>
        <StyledMemberName>{data.name}</StyledMemberName>
      </StyledTableCell>
      <StyledTableCell>
        <StyledSessionCount>{data.sessionCount}</StyledSessionCount>
      </StyledTableCell>
      <StyledTableCell>
        <HorizontalBarUnit unitValue={64} graphRatio={96} color="#69AEF8" />
      </StyledTableCell>
      <StyledTableCell>
        <HorizontalBarUnit unitValue={48} graphRatio={96} color="#17D4E5" />
      </StyledTableCell>
      <StyledTableCell>
        <StyledLastSessionDate>{format(new Date(data.lastSessionDate), "MM'月'dd'日'")}</StyledLastSessionDate>
      </StyledTableCell>
      <StyledIconButtonContainer>
        <LiveIconButton icon="link" size="regular" styling="light" id="link" />
        <LiveIconButton icon="more" size="regular" styling="light" id="more" />
      </StyledIconButtonContainer>
    </StyledTableRow>
  );
};

const StyledTableRow = styled.tr`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  border-top: 1px solid lightGray;
  border-bottom: 1px solid lightGray;
`;

const StyledTableCell = styled.td`
  padding: 16px 12px;
`;

const StyledMemberName = styled.span`
  display: flex;
  align-items: center;
  width: 120px;
  margin-left: ${space(3)};
  ${TypographyTokens.Label3};
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
  width: 80px;
  margin-right: ${space(16)};
  ${TypographyTokens.Label4};
  color: ${ColorTokens.Text02};
  text-align: right;
`;

const StyledIconButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  & button:first-of-type {
    margin-right: ${space(4)};
  }
`;