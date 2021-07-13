const Breakpoints = {
  xs: 375,
  sm: 576,
  mds: 690,
  md: 768,
  mdl: 960,
  lg: 1024,
  xl: 1200,
  max: 1440,
} as const;

const Size = {
  xs: `${Breakpoints.xs}px`,
  sm: `${Breakpoints.sm}px`,
  mds: `${Breakpoints.mds}px`,
  md: `${Breakpoints.md}px`,
  mdl: `${Breakpoints.mdl}px`,
  lg: `${Breakpoints.lg}px`,
  xl: `${Breakpoints.xl}px`,
  max: `${Breakpoints.max}px`,
} as const;

export const Device = {
  xs: `min-width: ${Size.xs}`,
  sm: `min-width: ${Size.sm}`,
  mds: `min-width: ${Size.mds}`,
  md: `min-width: ${Size.md}`,
  land_mdl: `max-width: ${Size.mdl}`,
  lg: `min-width: ${Size.lg}`,
  xl: `min-width: ${Size.xl}`,
  max: `min-width: ${Size.max}`,
} as const;
