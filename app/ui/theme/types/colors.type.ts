interface Color {
  hex: string;
  rgb: string;
}

interface ColorWithTints extends Color {
  tints: Color[];
}

export default interface Colors {
  primary: ColorWithTints;
  primaryContrast: Color;
  secondary: ColorWithTints;
  secondaryContrast: Color;
  accents: Color[];
  text: Color;
  background: Color;
}
