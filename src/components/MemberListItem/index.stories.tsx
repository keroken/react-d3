import { MemberListItem } from '.';
import { makeMeta } from '../../helpers/Story';
import React from 'react';

export default makeMeta({
  component: MemberListItem,
  meta: {
    package: 'core',
    type: 'components',
    category: 'dataDisplay',
    name: 'MemberListItem',
  },
});
export const Primary = () => {
  return (
    <MemberListItem />
  );
};

const data = 62;
