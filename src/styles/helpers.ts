import { css } from 'styled-components';

const GutterDimension = 4 as const;

export function getSpace(val: number): string {
  return `${GutterDimension * val}px`;
}

export function getSquareCss(size: number | string) {
  const value = typeof size === 'number' ? `${size}px` : size;

  return css`
    width: ${value};
    height: ${value};
  `;
}

export const BorderRadius = {
  Half: `${GutterDimension / 2}px`,
  Default: `${GutterDimension}px`,
  Double: `${GutterDimension * 2}px`,
  Circle: '999rem',
  Pill: '10px',
} as const;

export const ButtonWidth = {
  narrower: '112px',
  narrow: '140px',
  medium: '180px',
  wide: '240px',
} as const;
