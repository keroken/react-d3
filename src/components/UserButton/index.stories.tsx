import { UserButton } from '.';
import { makeMeta } from '../../helpers/Story';
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
  return <UserButton name={data.name} imageUrl={data.imageUrl} isActive={data.isActive} />;
};

const data = {
  name: '松井 麻衣',
  imageUrl: 'images/interview-image02.png',
  isActive: true,
};
