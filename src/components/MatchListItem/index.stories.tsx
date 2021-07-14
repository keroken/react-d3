import { MatchListItem } from '.';
import { makeMeta } from '@/helpers/Story';
import { userDataType } from '@/components/userDataType';
import React from 'react';
import styled from 'styled-components';

export default makeMeta({
  component: MatchListItem,
  meta: {
    package: 'core',
    type: 'components',
    category: 'layout',
    name: 'MatchListItem',
  },
});
export const Basic = () => {
  return (
    <StyledTable>
      <MatchListItem userData={userData} memberData={memberData} />
    </StyledTable>
  );
};

const StyledTable = styled.table`
  width: 100%;
`;

const userData: userDataType = {
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

const memberData: userDataType = {
  id: 1,
  name: '君枝 芳子',
  userColor: 'Pink',
  role: 'サブリーダー',
  team: 'マーケティング',
  sessionCount: 5,
  lastSessionDate: '2021-06-20',
  imageUrl: '',
  value_a: 67,
  value_b: 30,
  isActive: false,
};
