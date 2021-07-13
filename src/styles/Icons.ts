export const Tokens = {
  Mini: '10px',
  Tiny: '14px',
  Small: '16px',
  Regular: '20px',
  Large: '24px',
  Huge: '32px',
} as const;

export type Token = keyof typeof Tokens;
