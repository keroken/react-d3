import { Button } from '.';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { iconSelect, makeMeta } from '@/helpers/Story';
import React from 'react';

const handleOnClick = () => {
  /* eslint-disable no-alert */
  alert('clicked');
};

const testHref = `${window.location.origin}/?path=/story/core-components-inputs-button--basic-button`;

export const BasicButton = () => (
  <Button
    styling={select(styling.label, styling.options, styling.default)}
    isDisabled={boolean(isDisabled.label, isDisabled.default)}
    onClick={handleOnClick}
  >
    {text(innerText.label, innerText.default)}
  </Button>
);

export const HrefLinkButton = () => (
  <Button
    styling={select(styling.label, styling.options, styling.default)}
    isDisabled={boolean(isDisabled.label, isDisabled.default)}
    href={testHref}
  >
    link to: Base Button
  </Button>
);

export const IconButton = () => (
  <Button
    styling={select(styling.label, styling.options, styling.default)}
    isDisabled={boolean(isDisabled.label, isDisabled.default)}
    iconPosition={select(iconPosition.label, iconPosition.options, iconPosition.default)}
    icon={select(icon.label, icon.options, icon.default)}
    iconSize={select(iconSize.label, iconSize.options, iconSize.default)}
    badgeNumber={number(badgeNumber.label, badgeNumber.default)}
    badgeNoNumber={boolean(badgeNoNumber.label, badgeNoNumber.default)}
    color={select('color', color.options, 'default')}
  >
    {text(innerText.label, innerText.default)}
  </Button>
);

export default makeMeta({
  component: Button,
  meta: {
    package: 'core',
    type: 'components',
    category: 'inputs',
    name: 'Button',
  },
});

const knobData = {
  innerText: {
    label: 'Button text',
    default: '新規登録',
  },
  icon: iconSelect('plus'),
  color: {
    options: ['default', 'danger'] as const,
  },
  styling: {
    label: 'styling',
    options: ['normal', 'outline', 'text'] as const,
    default: 'normal' as const,
  },
  isDisabled: {
    label: 'is disabled',
    default: false,
  },
  iconPosition: {
    label: 'icon position',
    options: ['left', 'right'] as const,
    default: 'left' as const,
  },
  iconSize: {
    label: 'icon size',
    options: ['Small', 'Regular', 'Large'] as const,
    default: 'Large' as const,
  },
  badgeNumber: {
    label: 'badge number',
    default: 3,
  },
  badgeNoNumber: {
    label: 'badge no number',
    default: false,
  },
};

const { icon, innerText, styling, isDisabled, iconPosition, iconSize, badgeNumber, badgeNoNumber, color } = knobData;
