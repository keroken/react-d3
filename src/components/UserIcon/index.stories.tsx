import { UserIcon } from '.';
import { boolean, number } from '@storybook/addon-knobs';
import { makeMeta } from '../../helpers/Story';
import React from 'react';
import styled from 'styled-components';

export default makeMeta({
  component: UserIcon,
  meta: {
    package: 'core',
    type: 'components',
    category: 'dataDisplay',
    name: 'UserIcon',
  },
});

export const Basic = () => (
  <StyledContainer>
    <UserIcon
      name="笹野 健二"
      bgColor="YellowGreen"
      imageUrl="images/interview-image01.png"
      size="small"
      isActive={boolean('isActive', true)}
    />
    <UserIcon
      name="笹野 健二"
      bgColor="YellowGreen"
      imageUrl="images/interview-image01.png"
      size="regular"
      isActive={boolean('isActive', true)}
    />
    <UserIcon
      name="笹野 健二"
      bgColor="YellowGreen"
      imageUrl="images/interview-image01.png"
      size="large"
      isActive={boolean('isActive', true)}
    />
  </StyledContainer>
);

export const WithData = () => (
  <StyledContainer>
    <UserIcon
      name="笹野 健二"
      bgColor="YellowGreen"
      imageUrl="images/interview-image01.png"
      size="small"
      showData={boolean('show data', true)}
      dataValue={number('data value', 75)}
    />
    <UserIcon
      name="笹野 健二"
      bgColor="YellowGreen"
      imageUrl="images/interview-image01.png"
      size="regular"
      showData={boolean('show data', true)}
      dataValue={number('data value', 75)}
    />
    <UserIcon
      name="笹野 健二"
      bgColor="YellowGreen"
      imageUrl="images/interview-image01.png"
      size="large"
      showData={boolean('show data', true)}
      dataValue={number('data value', 75)}
    />
  </StyledContainer>
);

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  & > span {
    margin-right: 16px;
  }
`;
