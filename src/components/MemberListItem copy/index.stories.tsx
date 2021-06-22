import { MemberListItem, memberDataType } from '.';
import { makeMeta } from '../../helpers/Story';
import React from 'react';
import styled from 'styled-components';

export default makeMeta({
  component: MemberListItem,
  meta: {
    package: 'core',
    type: 'components',
    category: 'layout',
    name: 'MemberListItem',
  },
});
export const Basic = () => {
  return (
    <StyledTable>
      <MemberListItem data={memberData} />
    </StyledTable>
  );
};

const StyledTable = styled.table`
  width: 100%;
`;

const memberData: memberDataType = {
  id: 1,
  name: '笹野 健二',
  role: 'リーダー',
  sessionCount: 10,
  lastSessionDate: '2021-06-15',
  imageUrl: 'images/interview-image01.png',
  value_a: 63,
  value_b: 42,
  isActive: true,
};
