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
      <svg transform="translate(50, 50)">
        <HorizontalBarUnit unitValue={64} graphRatio={96} color="#17D4E5" />
      </svg>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
`;

const StyledMemberIcon = styled.span`
  display: flex;
  width: 32px;
  height: 32px;
  background: gray;
  border-radius: 999px;
`;
