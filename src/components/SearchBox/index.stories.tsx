import { SearchBox } from '.';
import { boolean, text } from '@storybook/addon-knobs';
import { makeMeta } from '@/helpers/Story';
import React, { useState } from 'react';

export default makeMeta({
  component: SearchBox,
  meta: {
    package: 'core',
    type: 'components',
    category: 'inputs',
    name: 'SearchBox',
  },
});

export const Basic = () => {
  const [input, setInput] = useState<string>('');
  const handleDelete = () => {
    setInput('');
  };

  return (
    <SearchBox
      placeholder={text(placeholder.label, placeholder.default)}
      width={text(width.label, width.default)}
      onChange={string => setInput(string)}
      text={input}
      showDeleteIcon={boolean(deleteIcon.label, deleteIcon.default)}
      showDetailsIcon={boolean('show details icon', false)}
      onClickDeleteIcon={handleDelete}
    />
  );
};

const knobData = {
  placeholder: {
    label: 'placeholder',
    default: '募集名を検索',
  },
  deleteIcon: {
    label: 'show delete icon',
    default: false,
  },
  width: {
    label: 'width',
    default: '100%',
  },
};

const { placeholder, deleteIcon, width } = knobData;
