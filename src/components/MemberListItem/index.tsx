import { HorizontalBarUnit } from '../HorizontalBarUnit';
import React from 'react';
import styled from 'styled-components';

type MemberListItemProps = {
  unitValue: number;
  graphRatio: number;
  color: string;
};

export const MemberListItem = () => {
  return (
    <StyledContainer>
      <StyledMemberIcon />
      <StyledMemberName>笹野賢二</StyledMemberName>
      <HorizontalBarUnit unitValue={64} graphRatio={96} color="#69AEF8" />
      <HorizontalBarUnit unitValue={48} graphRatio={96} color="#17D4E5" />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  border-top: 1px solid lightGray;
  border-bottom: 1px solid lightGray;
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
  margin-left: 12px;
`;
