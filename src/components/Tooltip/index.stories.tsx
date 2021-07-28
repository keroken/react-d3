import { Tooltip } from '.';
import { makeMeta } from '@/helpers/Story';
import { text } from '@storybook/addon-knobs';
import React from 'react';

export default makeMeta({
  component: Tooltip,
  meta: {
    package: 'core',
    type: 'components',
    category: 'dataDisplay',
    name: 'Tooltip',
  },
});

export const Basic = () => (
  <Tooltip height="30px" show>
    {text(message.label, message.default)}
  </Tooltip>
);

const knobData = {
  message: {
    label: 'message',
    default: 'ボタンを押すと5秒後に撮影します',
  },
};

const { message } = knobData;
