import { HorizontalBarUnit } from '../HorizontalBarUnit';
// import { LiveIconButton } from '@/components/inputs/LiveIconButton';
import { UserIcon } from '../UserIcon';
import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

export type memberDataType = {
  id: number;
  name: string;
  role: string;
  sessionCount: number;
  lastSessionDate: string;
  imageUrl: string;
  value_a: number;
  value_b: number;
  isActive: boolean;
};

type Props = {
  data: memberDataType;
};

export const MemberListItem = (memberData: Props) => {
  const { data } = memberData;
  return (
    <StyledTableRow>
      <td>
        <UserIcon imageUrl={data.imageUrl} isActive={data.isActive} size="regular" />
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
  padding: 0 8px;
  border-top: 1px solid lightGray;
  border-bottom: 1px solid lightGray;
`;

const StyledMemberName = styled.span`
  display: flex;
  align-items: center;
  width: 120px;
  margin-left: 12px;
  font-size: 12px;
  font-weight: bold;
  line-height: 12px;
`;

const StyledMemberRole = styled.span`
  display: flex;
  align-items: center;
  width: 80px;
  font-size: 12px;
  font-weight: normal;
  line-height: 12px;
`;

const StyledSessionCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40px;
  margin-right: 94px;
  font-size: 12px;
  font-weight: normal;
  line-height: 12px;
  color: #838789;
  text-align: right;
`;

const StyledBarUnit = styled.div`
  margin-right: 94px;
`;

const StyledLastSessionDate = styled.div`
  display: flex;
  align-items: center;
  width: 60px;
  margin-right: 94px;
  font-size: 12px;
  font-weight: normal;
  line-height: 12px;
  color: #838789;
  text-align: right;
`;

const StyledIconButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  & button:first-of-type {
    margin-right: 16px;
  }
`;
