import { GlobalHeader } from '.';
import { makeMeta } from '@/helpers/Story';
import { select } from '@storybook/addon-knobs';
import { userDataType } from '@/components/userDataType';
import React from 'react';

export default makeMeta({
  component: GlobalHeader,
  meta: {
    package: 'core',
    type: 'components',
    category: 'layout',
    name: 'GlobalHeader',
  },
});
export const Basic = () => {
  return (
    <GlobalHeader mode={select('mode', ['admin', 'manager', 'member'], 'admin')} user={userData} notification={3} />
  );
};

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
