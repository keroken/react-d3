import { MemberListItem, dataType } from '.';
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
      <MemberListItem data={memberData} />
    </StyledTable>
  );
};

const StyledTable = styled.table`
  width: 100%;
`;

const memberData: dataType = {
  id: 1,
  name: '笹野賢二',
  imageUrl: 'images/interview-image02.png',
  value_a: 63,
  value_b: 42,
};
