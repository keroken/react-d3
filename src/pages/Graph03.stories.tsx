import React from 'react';
import Graph03 from './Graph03';

export default {
  title: 'component/Graph03',
  component: Graph03,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = () => <Graph03 />;