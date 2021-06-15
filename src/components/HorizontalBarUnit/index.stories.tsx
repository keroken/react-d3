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
    <svg>
      <g transform="translate(50, 50)">
        <HorizontalBarUnit unitValue={data} graphRatio={96} color="#17D4E5" />
      </g>
    </svg>
  );
};

const data = 62;
