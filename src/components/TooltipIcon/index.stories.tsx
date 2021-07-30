import { TooltipIcon } from '.';
import { iconSelect, iconSizeSelect, makeMeta } from '@/helpers/Story';
import { select } from '@storybook/addon-knobs';
import React from 'react';
import styled from 'styled-components';

export default makeMeta({
  component: TooltipIcon,
  meta: {
    package: 'core',
    type: 'components',
    category: 'dataDisplay',
    name: 'TooltipIcon',
  },
});

export const Basic = () => (
  <StyledBase>
    <TooltipIcon
      icon={select(icon.label, icon.options, icon.default)}
      size={select(size.label, size.options, size.default)}
      child="他のメンバーと協力してタスクを進められるか"
    />
  </StyledBase>
);

const StyledBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
`;

const knobData = {
  icon: iconSelect(),
  size: iconSizeSelect(),
};

const { icon, size } = knobData;
