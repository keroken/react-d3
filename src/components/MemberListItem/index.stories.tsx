import { MemberListItem, dataProps } from '.';
import { makeMeta } from '../../helpers/Story';
import React from 'react';
import styled from 'styled-components';

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
    <StyledTable>
      <MemberListItem id={1} name="笹野賢二" imageUrl="https://keroken.com/image/interview-image01.png" value_a={63} value_b={42} />
    </StyledTable>
  );
};

const StyledTable = styled.table`
  width: 100%;
`;

const memberData: dataProps = {
  id: 1,
  name: '笹野賢二',
  imageUrl: 'https://keroken.com/image/interview-image02.png',
  value_a: 63,
  value_b: 42,
};
