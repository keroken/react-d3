import { HorizontalBarUnit } from '../HorizontalBarUnit';
import React from 'react';
import styled from 'styled-components';

export const MemberListItem = () => {
  return (
    <StyledTableRow>
      <StyledTableCell>
        <StyledMemberIcon />
      </StyledTableCell>
      <StyledTableCell>
        <StyledMemberName>笹野賢二</StyledMemberName>
      </StyledTableCell>
      <StyledTableCell>
        <HorizontalBarUnit unitValue={64} graphRatio={96} color="#69AEF8" />
      </StyledTableCell>
      <StyledTableCell>
        <HorizontalBarUnit unitValue={48} graphRatio={96} color="#17D4E5" />
      </StyledTableCell>
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
  padding: 16px 24px;
`;

const StyledMemberIcon = styled.span`
  display: flex;
  width: 32px;
  height: 32px;
  background: gray;
  border-radius: 999px;
`;

const StyledMemberName = styled.span`
  display: flex;
  align-items: center;
  width: 120px;
`;
