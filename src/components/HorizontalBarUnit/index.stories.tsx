import { HorizontalBarUnit } from '.';
import { makeMeta } from '../../helpers/Story';
import React from 'react';

export default makeMeta({
  component: HorizontalBarUnit,
  meta: {
    package: 'core',
    type: 'components',
    category: 'dataDisplay',
    name: 'HorizontalBarUnit',
  },
});
export const Primary = () => {
  return (
    <HorizontalBarUnit unitValue={data} graphRatio={96} color="#17D4E5" />
  );
};
export const Secondary = () => {
  return (
    <HorizontalBarUnit unitValue={data} graphRatio={96} color="#69AEF8" />
  );
};
export const Tertiary = () => {
  return (
    <HorizontalBarUnit unitValue={data} graphRatio={96} color="#FFD91A" />
  );
};

const data = 62;
