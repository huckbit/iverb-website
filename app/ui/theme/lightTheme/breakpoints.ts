import generateBreakpoint from '../util/generateBreakpoint';
import type { Breakpoints } from '../types/breakpoints.type';

const values = {
  base: 0,
  small: 320,
  smallLarge: 480,
  mediumSmall: 640,
  medium: 768,
  large: 1024,
  xlarge: 1200,
  huge: 1440,
  colossal: 1920,
};

const breakpoints: Breakpoints = {
  base: generateBreakpoint('base', 'b', values.base),
  small: generateBreakpoint('small', 's', values.small),
  smallLarge: generateBreakpoint('smallLarge', 'sl', values.smallLarge),
  mediumSmall: generateBreakpoint('mediumSmall', 'ml', values.mediumSmall),
  medium: generateBreakpoint('medium', 'm', values.medium),
  large: generateBreakpoint('large', 'l', values.large),
  xlarge: generateBreakpoint('xlarge', 'xl', values.xlarge),
  huge: generateBreakpoint('huge', 'h', values.huge),
  colossal: generateBreakpoint('colossal', 'c', values.colossal),
};

export default breakpoints;
