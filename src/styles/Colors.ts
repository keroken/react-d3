import { CSSProperties } from 'react';

export const ColorPalette = {
  White: '#FFFFFF',
  Black: '#000000',

  Gray10: '#F3F5F7',
  Gray20: '#EEF2F4',
  Gray30: '#D7DCE0',
  Gray40: '#BFC3C8',
  Gray50: '#A5ADB6',
  Gray60: '#9FA7AF',
  Gray70: '#8D939A',
  Gray80: '#676C72',
  Gray90: '#46494E',
  Gray100: '#202428',

  Blue10: '#DEEEFF',
  Blue20: '#CBE3FF',
  Blue30: '#9DC8F8',
  Blue40: '#69AEF8',
  Blue50: '#288CFA',
  Blue60: '#1876DD',
  Blue70: '#0D62BE',
  Blue80: '#064C99',
  Blue90: '#053E7C',
  Blue100: '#032B58',

  Red20: '#FFE5EC',
  Red40: '#F593AB',
  Red50: '#EC6664',
  Red70: '#B22447',

  Orange50: '#ECA564',

  Yellow50: '#FFD91A',

  BlueGreen50: '#17D4E5',

  Purple50: '#7379FF',

  Green50: '#84CC35',
} as const;

export const Tokens = {
  UiBackground01: ColorPalette.White,
  UiBackground01Dark: ColorPalette.Gray100,
  UiBackground02: ColorPalette.Gray10,
  UiBackground02Dark: ColorPalette.Gray90,
  UiBackground02Blue: ColorPalette.Blue10,
  UiBackgroundError: ColorPalette.Red20,

  Interactive01: ColorPalette.Blue50,
  Interactive02: ColorPalette.Gray70,
  Interactive02Dark: ColorPalette.Gray90,
  Interactive03: ColorPalette.Blue50,
  Interactive03Dark: ColorPalette.Gray70,
  Interactive04: ColorPalette.BlueGreen50,
  Interactive05: ColorPalette.Purple50,
  Interactive06: ColorPalette.Yellow50,
  Interactive07: ColorPalette.Green50,

  Danger: ColorPalette.Red50,
  Success: ColorPalette.Blue50,

  Ui01: ColorPalette.Gray30,
  Ui01Dark: ColorPalette.Gray80,
  Ui02: ColorPalette.Gray40,
  Ui02Dark: ColorPalette.Gray70,
  Ui03: ColorPalette.Gray100,

  Text01: ColorPalette.Gray100,
  Text01Dark: ColorPalette.White,
  Text02: ColorPalette.Gray50,
  Text02Dark: ColorPalette.Gray40,
  Text03: ColorPalette.Gray70,
  Text03Dark: ColorPalette.Gray50,
  Text04: ColorPalette.Gray40,
  Text04Dark: ColorPalette.Gray70,
  Text05: ColorPalette.White,
  TextBlack: ColorPalette.Black,

  TextError: ColorPalette.Red50,

  Link01: ColorPalette.Gray70,
  Link01Dark: ColorPalette.Blue40,

  Icon01: ColorPalette.Gray70,
  Icon01Dark: ColorPalette.Gray40,
  Icon02: ColorPalette.Gray50,
  Icon02Dark: ColorPalette.Gray70,
  Icon03: ColorPalette.White,

  Field01: ColorPalette.White,
  Field01Dark: ColorPalette.Gray100,
  Field02: ColorPalette.Gray10,
  Field02Dark: ColorPalette.Gray80,

  Support01: ColorPalette.Red50,
  Support02: ColorPalette.Blue50,

  Overlay01: ColorPalette.Gray100,
  Overlay02: ColorPalette.Black,

  Focus: ColorPalette.Blue50,
  FocusDark: ColorPalette.Gray40,

  HoverPrimary: ColorPalette.Blue70,
  HoverPrimaryDark: ColorPalette.Blue40,
  HoverSecondary: ColorPalette.Blue50,
  HoverSecondaryDark: ColorPalette.Gray80,

  HoverUi: ColorPalette.Gray20,
  HoverUiDark: ColorPalette.Gray80,
  HoverSelectedUi: ColorPalette.Gray40,
  HoverSelectedUiDark: ColorPalette.Gray70,
  HoverDanger: ColorPalette.Red70,
  HoverDangerDark: ColorPalette.Red40,
  HoverInput: ColorPalette.Gray70,
  HoverInputDark: ColorPalette.Gray50,

  ActivePrimary: ColorPalette.Blue100,
  ActivePrimaryDark: ColorPalette.Blue30,
  ActiveSecondary: ColorPalette.Blue70,
  ActiveSecondaryDark: ColorPalette.Gray70,
  ActiveUi: ColorPalette.Blue20,
  ActiveUiDark: ColorPalette.Gray70,
  ActiveSelectedUi: ColorPalette.Blue50,
  ActiveSelectedUiDark: ColorPalette.Blue50,
  ActiveDanger: ColorPalette.Red70,
  ActiveDangerDark: ColorPalette.Red20,
  ActiveInput: ColorPalette.Blue70,
  ActiveInputDark: ColorPalette.Gray40,

  SelectedUi: ColorPalette.Gray20,
  SelectedUiDark: ColorPalette.Gray70,

  Disabled01: ColorPalette.Gray30,
  Disabled02: ColorPalette.Gray80,
  Disabled03: ColorPalette.Gray90,
  Disabled04: ColorPalette.Blue100,

  AdminRow01: '#FCFCFC',
  AdminRow02: '#E2E6EA',
} as const;

export const UserColorTokens = {
  Red: '#F88282',
  Pink: '#F191DD',
  Purple: '#C88AE5',
  Turquoise: '#86CEE5',
  RoyalBlue: '#93B3F2',
  Blue: '#7ECAF5',
  Aquamarine: '#79EBDA',
  YellowGreen: '#8AE58B',
  Yellow: '#F3C90A',
  Orange: '#F9B12C',
} as const;

export type ColorType = ValueOf<typeof ColorPalette>;
export type ColorNameType = keyof typeof ColorPalette;
export type ColorTokenType = keyof typeof Tokens;
export type UserColorType = keyof typeof UserColorTokens;

export const BackgroundKey: { [key: number]: { code: CSSProperties['backgroundColor']; name: string } } = {
  0: {
    code: '#ffffff',
    name: 'WHITE',
  },
  1: {
    code: '#000000',
    name: 'BLACK',
  },
  2: {
    code: '#1abc9c',
    name: 'TURQUOISE',
  },
  3: {
    code: '#2ecc71',
    name: 'EMERALD',
  },
  4: {
    code: '#3498db',
    name: 'PETER RIVER',
  },
  5: {
    code: '#9b59b6',
    name: 'AMETHYST',
  },
  6: {
    code: '#34495e',
    name: 'WET ASPHALT',
  },
  7: {
    code: '#16a085',
    name: 'GREEN SEA',
  },
  8: {
    code: '#27ae60',
    name: 'NEPHRITIS',
  },
  9: {
    code: '#2980b9',
    name: 'BELIZE HOLE',
  },
  10: {
    code: '#8e44ad',
    name: 'WISTERIA',
  },
  11: {
    code: '#2c3e50',
    name: 'MIDNIGHT BLUE',
  },
  12: {
    code: '#f1c40f',
    name: 'SUN FLOWER',
  },
  13: {
    code: '#e67e22',
    name: 'CARROT',
  },
  14: {
    code: '#e74c3c',
    name: 'ALIZARIN',
  },
  15: {
    code: '#ecf0f1',
    name: 'CLOUDS',
  },
  16: {
    code: '#95a5a6',
    name: 'CONCRETE',
  },
  17: {
    code: '#f39c12',
    name: 'ORANGE',
  },
  18: {
    code: '#d35400',
    name: 'PUMPKIN',
  },
  19: {
    code: '#c0392b',
    name: 'POMEGRANATE',
  },
  20: {
    code: '#bdc3c7',
    name: 'SILVER',
  },
  21: {
    code: '#7f8c8d',
    name: 'ASBESTOS',
  },
  99: {
    code: 'transparent',
    name: '背景画像設定',
  },
} as const;
