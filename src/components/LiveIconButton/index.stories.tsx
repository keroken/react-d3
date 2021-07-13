import { LiveIconButton } from '.';
import { boolean, select } from '@storybook/addon-knobs';
import { iconSelect, makeMeta } from '@/helpers/Story';
import React from 'react';

export const BasicButton = () => (
  <LiveIconButton
    id="live-icon-button"
    styling={select(styling.label, styling.options, styling.default)}
    isDisabled={boolean(isDisabled.label, isDisabled.default)}
    icon={select(icon.label, icon.options, icon.default)}
    size={select(size.label, size.options, size.default)}
  />
);

export default makeMeta({
  component: LiveIconButton,
  meta: {
    package: 'core',
    type: 'components',
    category: 'inputs',
    name: 'LiveIconButton',
  },
});

const knobData = {
  icon: iconSelect('play-filled'),
  styling: {
    label: 'styling',
    options: ['dark', 'light', 'transparent'] as const,
    default: 'dark' as const,
  },
  isDisabled: {
    label: 'is disabled',
    default: false,
  },
  size: {
    label: 'size',
    options: ['small', 'regular', 'large'] as const,
    default: 'large' as const,
  },
};

const { icon, styling, isDisabled, size } = knobData;
