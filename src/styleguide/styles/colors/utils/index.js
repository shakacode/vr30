// @flow
import type { UiTextColor } from 'styleguide/styles/colors';

export const textColorToBaseColor = (color: UiTextColor) => {
  switch (color) {
    case 'general':
      return 'extraLightGray';
    case 'info':
      return 'darkGray';
    case 'heading':
      return 'black';
    case 'success':
      return 'green';
    case 'warning':
      return 'orange';
    case 'danger':
      return 'red';
    default:
      return 'gray';
  }
};
