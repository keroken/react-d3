import React from 'react';
import { Story, Meta } from '@storybook/react';

import Graph03 from './Graph03';

export default {
  title: 'component/Graph03',
  component: Graph03,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <Graph03 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Graph03',
};