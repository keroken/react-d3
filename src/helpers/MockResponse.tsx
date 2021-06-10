/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactNode } from 'react';

export type MockData = {
  reduxStore?: object;
  api: object;
};

export const MockContext = React.createContext<MockData | null>(null);

type Props = {
  children: ReactNode | ReactNode[];
  value: MockData;
};

export const MockResponse = ({ children, value }: Props) => (
  <MockContext.Provider value={value}>{children}</MockContext.Provider>
);
