/* @flow */

export type UiBaseColor =
  | 'orange'
  | 'teal'
  | 'darkTeal'
  | 'lightTeal'
  | 'red'
  | 'beige'
  | 'extraLightGray'
  | 'lightGray'
  | 'gray'
  | 'darkGray'
  | 'extraDarkGray'
  | 'black'
  | 'white'
  | 'green'
  | 'turquoise'
  | 'grayBlue';

export type UiTextColor = 'general' | 'info' | 'heading' | 'success' | 'warning' | 'danger';

export type UiColor = UiBaseColor | UiTextColor;

const colors = {
  // cta/ primary
  orange: '#f5764f',

  // general button, label
  teal: '#03cccb',

  // general link
  darkTeal: '#009077',

  // Info bg, selected period
  lightTeal: '#e8f3f0',

  // label, error status
  red: '#f9565b',

  // Alert bg, reserved dates
  beige: '#f9ebd3',

  // Background
  extraLightGray: '#f5f5f5',

  // Hover, disabled field, blocked period
  lightGray: '#777',

  // Borders, icons
  gray: '#555',

  // Icons, additional text
  darkGray: '#222',

  // Icons, additional text
  extraDarkGray: '#222',

  // Heading, navbar
  black: '#000',

  // In listing tiles, buttons, labels
  white: '#fff',

  // success
  green: '#18b142',

  turquoise: '#03CCCB',

  grayBlue: '#ACBDC5',
};

export const textColor = {
  general: colors.extraLightGray,
  info: colors.darkGray,
  heading: colors.black,
  success: colors.green,
  warning: colors.orange,
  danger: colors.red,
};

export default colors;
