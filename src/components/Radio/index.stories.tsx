import { Radio } from '.';
import { makeMeta } from '@/helpers/Story';
import React, { ChangeEvent, useCallback, useState } from 'react';

export default makeMeta({
  component: Radio,
  meta: {
    package: 'core',
    type: 'components',
    category: 'inputs',
    name: 'Radio',
  },
});

export const Basic = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setSelectedValue(value),
    [],
  );

  return (
    <ul>
      <li>
        <Radio name="noop" />
      </li>
      <li>
        <Radio
          name="radio-group"
          label="Radio button 1"
          value="foo"
          onChange={handleChange}
          checked={selectedValue === 'foo'}
        />
      </li>
      <li>
        <Radio
          name="radio-group"
          label="Radio button 2"
          value="bar"
          onChange={handleChange}
          checked={selectedValue === 'bar'}
        />
      </li>
      <li>
        <Radio name="radio-group" label="Radio button 3 ( Disabled )" disabled />
      </li>
    </ul>
  );
};
