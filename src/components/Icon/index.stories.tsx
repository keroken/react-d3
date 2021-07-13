import { Icon } from '.';
import { IconName, iconElements } from '@Icon';
import { boolean, number, select } from '@storybook/addon-knobs';
import { colorNameSelect, iconSelect, iconSizeSelect, makeMeta } from '@/helpers/Story';
import React from 'react';
import styled from 'styled-components';

export default makeMeta({
  component: Icon,
  meta: {
    package: 'core',
    type: 'components',
    category: 'dataDisplay',
    name: 'Icon',
  },
});

export const iconList = () => (
  <div>
    {(Object.keys(iconElements) as IconName[]).map(iconName => (
      <span key={iconName} style={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
        <Icon
          name={iconName}
          color={select(color.label, color.options, color.default)}
          size={select(size.label, size.options, size.default)}
          href={boolean(isLink.label, isLink.default) ? '/' : undefined}
        />
        <span style={{ marginLeft: '10px' }}>{iconName}</span>
      </span>
    ))}
  </div>
);

export const withoutBadge = () => (
  <StyledContainer>
    <Icon
      name={select(icon.label, icon.options, icon.default)}
      color={select(color.label, color.options, color.default)}
      size={select(size.label, size.options, size.default)}
      href={boolean(isLink.label, isLink.default) ? '/' : undefined}
      isDisabled={boolean(isDisabled.label, isDisabled.default)}
    />
  </StyledContainer>
);

export const withBadge = () => (
  <StyledContainer>
    <Icon
      name={select(icon.label, icon.options, icon.default)}
      color={select(color.label, color.options, color.default)}
      size={select(size.label, size.options, size.default)}
      badgeNumber={number('number', 2)}
      href={boolean(isLink.label, isLink.default) ? '/' : undefined}
      isDisabled={boolean(isDisabled.label, isDisabled.default)}
    />
  </StyledContainer>
);

export const withNoNumberBadge = () => (
  <StyledContainer>
    <Icon
      name={select(icon.label, icon.options, icon.default)}
      color={select(color.label, color.options, color.default)}
      size={select(size.label, size.options, size.default)}
      badgeNumber={number('number', 2)}
      href={boolean(isLink.label, isLink.default) ? '/' : undefined}
      badgeNoNumber
      isDisabled={boolean(isDisabled.label, isDisabled.default)}
    />
  </StyledContainer>
);

const StyledContainer = styled.div`
  display: inline-block;
  margin: 8px;
`;

const knobData = {
  icon: iconSelect(),
  color: colorNameSelect(),
  size: iconSizeSelect(),
  isLink: {
    label: 'is link',
    default: false,
  },
  isDisabled: {
    label: 'is disabled',
    default: false,
  },
};

const { icon, color, size, isLink, isDisabled } = knobData;
