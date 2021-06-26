import { css } from 'styled-components';

export const Effect = {
  TabActive: css`
    box-shadow: inset 0px -1px 0px #177ee5;
  `,
  TabInactive: css`
    box-shadow: inset 0px -1px 0px #dedfe0;
  `,
} as const;

export const Shadow = {
  Neutral: `0 1px 4px 0 rgba(0, 0, 0, .2)`,
  Floating: `0 1px 8px 0 rgba(0, 0, 0, .2)`,
  Dialog: `0 10px 40px 0 rgba(0, 0, 0, .2)`,
  Hover: `0 8px 12px 0 rgba(0, 0, 0, .3)`,
  DropShadow10: '0 0 10px rgba(0, 0, 0, 0.1)',
  DropShadow24: '0 0 24px rgba(0, 0, 0, 0.15)',
} as const;
