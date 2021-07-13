import { css } from 'styled-components';

export const Tokens = {
  Heading1: css`
    font-size: 32px;
    line-height: 40px;
    font-weight: bold;
  `,
  Heading2: css`
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
  `,
  Heading3: css`
    font-size: 20px;
    line-height: 32px;
    font-weight: bold;
  `,
  Heading4: css`
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
  `,
  Heading5: css`
    font-size: 14px;
    line-height: 24px;
    font-weight: bold;
  `,
  Body1: css`
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
  `,
  Body2: css`
    font-size: 13px;
    line-height: 18px;
    font-weight: normal;
  `,
  Label1: css`
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
  `,
  Label2: css`
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
  `,
  Label3: css`
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
  `,
  Label4: css`
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
  `,
  Label5: css`
    font-size: 12px;
    line-height: 18px;
    font-weight: bold;
  `,
  Label6: css`
    font-size: 12px;
    line-height: 18px;
    font-weight: normal;
  `,
} as const;
