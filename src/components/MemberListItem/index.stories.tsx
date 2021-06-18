import { MemberListItem } from '.';
import { makeMeta } from '../../helpers/Story';
import React from 'react';
import styled from 'styled-components';

export default makeMeta({
  component: MemberListItem,
  meta: {
    package: 'core',
    type: 'components',
    category: 'dataDisplay',
    name: 'MemberListItem',
  },
});
export const Primary = () => {
  return (
    <StyledTable>
      <MemberListItem />
    </StyledTable>
  );
};

const StyledTable = styled.table`
  width: 100%;
`;
