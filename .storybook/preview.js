import { ResetCss } from '@/styles';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const GlobalWrapper = storyFn => (
  <>
    <ResetCss />
    {storyFn()}
  </>
);

addDecorator(GlobalWrapper);