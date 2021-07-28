import { Loading } from '.';
import { boolean, number, select } from '@storybook/addon-knobs';
import { makeMeta } from '@/helpers/Story';
import React from 'react';

export default makeMeta({
  component: Loading,
  meta: {
    package: 'core',
    type: 'components',
    category: 'feedback',
    name: 'Loading',
  },
});

export const Basic = () => (
  <>
    <p>Knobs から操作してください</p>
    <Loading
      loading={boolean('loading', false)}
      size={select('size', ['small', 'large'], 'large')}
      delayTime={number('delay time', 0)}
    />
  </>
);
