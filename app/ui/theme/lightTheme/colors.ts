import type Colors from '../types/colors.type';

const colors: Colors = {
  primary: {
    hex: '#FFC107',
    rgb: '255, 193, 7',
    tints: [
      {
        hex: '#FFD54F',
        rgb: '255, 213, 79',
      },
      {
        hex: '#FFE082',
        rgb: '255, 224, 130',
      },
    ],
  },
  primaryContrast: {
    hex: '#000000',
    rgb: '0, 0, 0',
  },
  secondary: {
    hex: '#FFFFFF',
    rgb: '255, 255, 255',
    tints: [
      {
        hex: '#F5F5F5',
        rgb: '245, 245, 245',
      },
      {
        hex: '#EEEEEE',
        rgb: '238, 238, 238',
      },
    ],
  },
  secondaryContrast: {
    hex: '#000000',
    rgb: '0, 0, 0',
  },
  accents: [
    {
      hex: '#FF5722',
      rgb: '255, 87, 34',
    },
    {
      hex: '#03A9F4',
      rgb: '3, 169, 244',
    },
    {
      hex: '#4CAF50',
      rgb: '76, 175, 80',
    },
  ],
  text: {
    hex: '#000000',
    rgb: '0, 0, 0',
  },
  background: {
    hex: '#FFFFFF',
    rgb: '255, 255, 255',
  },
};

export default colors;
