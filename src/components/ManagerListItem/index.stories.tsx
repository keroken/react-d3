import { ManagerListItem } from '.';
import { makeMeta } from '@/helpers/Story';
import { userDataType } from '@/components/userDataType';
import React from 'react';
import styled from 'styled-components';

export default makeMeta({
  component: ManagerListItem,
  meta: {
    package: 'core',
    type: 'components',
    category: 'layout',
    name: 'ManagerListItem',
  },
});
export const Basic = () => {
  return (
    <StyledTable>
      <tbody>
        <ManagerListItem userData={userData} memberData={memberData} />
      </tbody>
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

const memberData: userDataType[] = [
  {
    id: 1,
    name: '君枝 芳子',
    userColor: 'Pink',
    role: 'サブリーダー',
    team: 'カスタマーサクセス',
    sessionCount: 5,
    lastSessionDate: '2021-06-20',
    imageUrl: 'images/interview-image02.png',
    value_a: 67,
    value_b: 30,
    isActive: true,
  },
  {
    id: 2,
    name: '加藤 真一',
    userColor: 'Yellow',
    role: 'サブリーダー',
    team: 'カスタマーサクセス',
    sessionCount: 5,
    lastSessionDate: '2021-06-20',
    imageUrl: undefined,
    value_a: 88,
    value_b: 30,
    isActive: true,
  },
  {
    id: 3,
    name: '山本 彩香',
    userColor: 'Purple',
    role: 'メンバー',
    team: 'カスタマーサクセス',
    sessionCount: 5,
    lastSessionDate: '2021-06-20',
    imageUrl: undefined,
    value_a: 92,
    value_b: 30,
    isActive: true,
  },
  {
    id: 4,
    name: '久保 浩子',
    userColor: 'Blue',
    role: 'メンバー',
    team: 'カスタマーサクセス',
    sessionCount: 5,
    lastSessionDate: '2021-06-20',
    imageUrl: undefined,
    value_a: 43,
    value_b: 30,
    isActive: true,
  },
  {
    id: 5,
    name: '長谷川 佳美',
    nameForIcon: '長谷川',
    userColor: 'Aquamarine',
    role: 'メンバー',
    team: 'カスタマーサクセス',
    sessionCount: 5,
    lastSessionDate: '2021-06-20',
    imageUrl: undefined,
    value_a: 92,
    value_b: 30,
    isActive: true,
  },
  {
    id: 6,
    name: '渋谷 圭介',
    userColor: 'Orange',
    role: 'メンバー',
    team: 'カスタマーサクセス',
    sessionCount: 5,
    lastSessionDate: '2021-06-20',
    imageUrl: undefined,
    value_a: 43,
    value_b: 30,
    isActive: true,
  },
];
