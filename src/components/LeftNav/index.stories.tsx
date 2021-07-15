import { LeftNav } from '.';
import { makeMeta } from '../../helpers/Story';
import { userDataType } from '@/components/userDataType';
import React from 'react';
import styled from 'styled-components';

export default makeMeta({
  component: LeftNav,
  meta: {
    package: 'core',
    type: 'components',
    category: 'layout',
    name: 'LeftNav',
  },
});
export const Basic = () => {
  return (
    <StyledContainer>
      <LeftNav userData={userData} memberData={memberData} memberDataOther={memberDataOther} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
`;

const userData: userDataType = {
  id: 1,
  name: '久保 浩子',
  userColor: 'Blue',
  role: 'マネージャー',
  team: 'カスタマーサクセス',
  sessionCount: 10,
  lastSessionDate: '2021-06-15',
  imageUrl: 'images/interview-image02.png',
  value_a: 63,
  value_b: 42,
  isActive: true,
};

const memberData: userDataType[] = [
  {
    id: 1,
    name: '笹野 健二',
    userColor: 'Aquamarine',
    role: 'メンバー',
    team: 'カスタマーサクセス',
    sessionCount: 10,
    lastSessionDate: '2021-06-15',
    imageUrl: 'images/interview-image01.png',
    value_a: 63,
    value_b: 42,
    isActive: true,
  },
  {
    id: 2,
    name: '松井 麻衣',
    userColor: 'Orange',
    role: 'メンバー',
    team: 'カスタマーサクセス',
    sessionCount: 10,
    lastSessionDate: '2021-06-15',
    imageUrl: 'images/interview-image02.png',
    value_a: 63,
    value_b: 42,
    isActive: true,
  },
  {
    id: 3,
    name: '原田 智則',
    userColor: 'Red',
    role: 'メンバー',
    team: 'カスタマーサクセス',
    sessionCount: 10,
    lastSessionDate: '2021-06-15',
    imageUrl: 'images/interview-image01.png',
    value_a: 63,
    value_b: 42,
    isActive: false,
  },
  {
    id: 4,
    name: '渋谷 圭佑',
    userColor: 'RoyalBlue',
    role: 'メンバー',
    team: 'カスタマーサクセス',
    sessionCount: 10,
    lastSessionDate: '2021-06-15',
    imageUrl: 'images/interview-image01.png',
    value_a: 63,
    value_b: 42,
    isActive: true,
  },
];

const memberDataOther: userDataType[] = [
  {
    id: 1,
    name: '長田 陽介',
    userColor: 'Purple',
    role: 'メンバー',
    team: 'カスタマーサクセス',
    sessionCount: 10,
    lastSessionDate: '2021-06-15',
    imageUrl: 'images/interview-image01.png',
    value_a: 63,
    value_b: 42,
    isActive: false,
  },
  {
    id: 2,
    name: '坂上 雅子',
    userColor: 'Orange',
    role: 'メンバー',
    team: 'カスタマーサクセス',
    sessionCount: 10,
    lastSessionDate: '2021-06-15',
    imageUrl: 'images/interview-image02.png',
    value_a: 63,
    value_b: 42,
    isActive: false,
  },
];
