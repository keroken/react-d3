import { UserIcon } from '.';
import { boolean, select } from '@storybook/addon-knobs';
import { makeMeta } from '../../helpers/Story';
import React from 'react';

export default makeMeta({
  component: UserIcon,
  meta: {
    package: 'core',
    type: 'components',
    category: 'dataDisplay',
    name: 'UserIcon',
  },
});

export const Basic = () => (
  <UserIcon
    imageUrl="images/interview-image01.png"
    size={select('size', ['small', 'regular', 'large'], 'regular')}
    isActive={boolean('isActive', true)}
  />
);
