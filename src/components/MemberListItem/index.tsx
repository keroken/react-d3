import { HorizontalBarUnit } from '../HorizontalBarUnit';
import React from 'react';
import styled from 'styled-components';

export type dataProps = {
  id: number;
  name: string;
  imageUrl: string;
  value_a: number;
  value_b: number;
};

export const MemberListItem = ({ id, name, imageUrl, value_a, value_b }: dataProps) => {
  return (
    <StyledTableRow>
      <StyledTableCell>
        <StyledMemberIcon imageUrl={imageUrl} />
      </StyledTableCell>
      <StyledTableCell>
        <StyledMemberName>{name}</StyledMemberName>
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

const StyledMemberIcon = styled.span<Pick<dataProps, 'imageUrl'>>`
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
`;
