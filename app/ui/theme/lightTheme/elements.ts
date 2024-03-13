import type Elements from '../types/elements.type';
import colors from './colors';

const elements: Elements = {
  button: {
    neutral: {
      border: colors.primary.hex,
      background: colors.background.hex,
      color: colors.primary.hex,
      hover: {
        background: colors.primary.hex,
        color: colors.text.hex,
      },
    },
    primary: {
      border: colors.primary.hex,
      background: colors.primary.hex,
      color: colors.text.hex,
      hover: {
        background: colors.primary.tints[0].hex,
        color: colors.text.hex,
      },
    },
    secondary: {
      border: colors.secondary.hex,
      background: colors.background.hex,
      color: colors.secondary.hex,
      hover: {
        background: colors.secondary.hex,
        color: colors.text.hex,
      },
    },
  },
};

export default elements;
