export const Durations = {
  Fast: 150,
  Regular: 250,
  Slow: 300,
} as const;

export const Speeds = {
  Fast: '0.15s',
  Regular: '0.25s',
  Slow: '0.3s',
} as const;

export const Easings = {
  Enter: 'cubic-bezier(.11, .57, .14, 1)',
  Leave: 'cubic-bezier(0, .14, .75, 1)',
  Filter: 'cubic-bezier(0, 2.5, 0.2, 2.5)',
} as const;
