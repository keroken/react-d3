
import { TypographyTokens, space } from '@/styles';
import { HorizontalBarUnit } from '../HorizontalBarUnit';
import React from 'react';
import styled from 'styled-components';

export type dataType = {
  id: number;
  name: string;
  imageUrl: string;
  value_a: number;
  value_b: number;
};

type Props = {
  data: dataType;
}

export const MemberListItem = (memberData: Props) => {
  return (
    <StyledTableRow>
      <StyledTableCell>
        <StyledMemberIcon imageUrl={memberData.data.imageUrl} />
      </StyledTableCell>
      <StyledTableCell>
        <StyledMemberName>{memberData.data.name}</StyledMemberName>
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
  padding: 16px 12px;
`;

const StyledMemberIcon = styled.span<Pick<dataType, 'imageUrl'>>`
  display: flex;
  width: 32px;
  height: 32px;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  border-radius: 999px;
`;

const StyledMemberName = styled.span`
  display: flex;
  align-items: center;
  width: 120px;
  margin-left: ${space(3)};
  ${TypographyTokens.Label3};
`;
