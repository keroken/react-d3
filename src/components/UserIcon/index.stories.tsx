import { UserIcon } from '.';
import { boolean, number, select } from '@storybook/addon-knobs';
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

const colorData = [
  'Red',
  'Pink',
  'Purple',
  'Turquoise',
  'RoyalBlue',
  'Blue',
  'Aquamarine',
  'YellowGreen',
  'Yellow',
  'Orange',
];

export const Basic = () => {
  return (
    <>
      <StyledContainer>
        {colorData.map(color => (
          <UserIcon
            key={color}
            name="笹野 健二"
            bgColor={color}
            size={select('size', ['small', 'regular', 'large'], 'regular')}
            isActive={boolean('isActive', true)}
          />
        ))}
      </StyledContainer>
      <StyledContainer>
        {colorData.map(color => (
          <UserIcon
            key={color}
            name="鴨志田 一也"
            nameForIcon="鴨志田"
            bgColor={color}
            size={select('size', ['small', 'regular', 'large'], 'regular')}
            isActive={boolean('isActive', true)}
          />
        ))}
      </StyledContainer>
    </>
  );
};

export const WithImage = () => (
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
      dataValue={number('data value', 60)}
    />
    <UserIcon
      name="笹野 健二"
      bgColor="YellowGreen"
      imageUrl="images/interview-image01.png"
      size="regular"
      showData={boolean('show data', true)}
      dataValue={number('data value', 60)}
    />
    <UserIcon
      name="笹野 健二"
      bgColor="YellowGreen"
      imageUrl="images/interview-image01.png"
      size="large"
      showData={boolean('show data', true)}
      dataValue={number('data value', 60)}
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
