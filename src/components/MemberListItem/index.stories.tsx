import { MemberListItem } from '.';
import { makeMeta } from '../../helpers/Story';
import { userDataType } from '@/components/userDataType';
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
export const Primary = () => {
  return (
    <StyledTable>
      <tbody>
        <MemberListItem data={memberData} />
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  width: 100%;
`;

const memberData: userDataType = {
  id: 1,
  name: '笹野 健二',
  userColor: 'Blue',
  role: 'リーダー',
  team: 'カスタマーサクセス',
  sessionCount: 10,
  lastSessionDate: '2021-06-15',
  imageUrl: 'images/interview-image01.png',
  value_a: 63,
  value_b: 42,
  isActive: true,
};
