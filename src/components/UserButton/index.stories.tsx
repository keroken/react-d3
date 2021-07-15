import { UserButton } from '.';
import { makeMeta } from '../../helpers/Story';
import { userDataType } from '@/components/userDataType';
import React from 'react';

export default makeMeta({
  component: UserButton,
  meta: {
    package: 'core',
    type: 'components',
    category: 'inputs',
    name: 'UserButton',
  },
});
export const Basic = () => {
  return (
    <UserButton
      id={data.id}
      role={data.role}
      name={data.name}
      userColor={data.userColor}
      imageUrl={data.imageUrl}
      isActive={data.isActive}
      team={data.team}
      value_a={data.value_a}
      value_b={data.value_b}
      sessionCount={data.sessionCount}
      lastSessionDate={data.lastSessionDate}
    />
  );
};

const data: userDataType = {
  id: 1,
  name: '久保 浩子',
  userColor: 'Yellow',
  role: 'リーダー',
  team: 'カスタマーサクセス',
  sessionCount: 10,
  lastSessionDate: '2021-06-15',
  imageUrl: 'images/interview-image02.png',
  value_a: 63,
  value_b: 42,
  isActive: true,
};
