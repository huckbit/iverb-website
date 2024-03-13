import type { Breakpoint } from '../types/breakpoints.type';

const breakpointMedia = (value: number): string => `only screen and (min-width: ${value}px)`;

const generateBreakpoint = (name: string, shortName: string, value: number): Breakpoint => {
  return {
    name,
    shortName,
    value,
    media: breakpointMedia(value),
  };
};

export default generateBreakpoint;
