import { DotLoading } from '.';
import { boolean, number, select } from '@storybook/addon-knobs';
import { makeMeta } from '@/helpers/Story';
import React from 'react';

export default makeMeta({
  component: DotLoading,
  meta: {
    package: 'core',
    type: 'components',
    category: 'feedback',
    name: 'DotLoading',
  },
});

export const Basic = () => (
  <>
    <p>Knobs から操作してください</p>
    <DotLoading
      loading={boolean('loading', false)}
      size={select('size', ['small', 'large'], 'large')}
      delayTime={number('delay time', 0)}
    />
  </>
);
