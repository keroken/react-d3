import { Badge } from '.';
import { boolean, number } from '@storybook/addon-knobs';
import { makeMeta } from 'helpers/Story';
import React from 'react';

export default makeMeta({
  component: Badge,
  meta: {
    package: 'core',
    type: 'components',
    category: 'dataDisplay',
    name: 'Badge',
  },
});

export const Basic = () => (
  <Badge number={number(num.label, num.default)} isDisabled={boolean(isDisabled.label, isDisabled.default)} />
);

const knobData = {
  num: {
    label: 'number',
    default: 2,
  },
  isDisabled: {
    label: 'isDisabled',
    default: false,
  },
};

const { num, isDisabled } = knobData;
