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

const data = 62;
