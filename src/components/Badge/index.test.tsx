import '@testing-library/jest-dom/extend-expect';
import { Badge } from '.';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('<Badge>', () => {
  const testId = 'testId';
  test('正常系', () => {
    const number = 10;
    render(
      <div data-testid={testId}>
        <Badge number={number} />
      </div>,
    );
    expect(screen.getByText(String(number))).toBeVisible();
  });
});
