export interface Breakpoint {
  media: string;
  value: number;
  name: string;
  shortName: string;
}

export type BreakpointNames = 'base' | 'small' | 'smallLarge' | 'mediumSmall' | 'medium' | 'large' | 'xlarge' | 'huge' | 'colossal';

export type BreakpointShortNames = 'b' | 's' | 'sl' | 'ml' | 'm' | 'l' | 'xl' | 'h' | 'c';

export type BreakpointAllNames = BreakpointNames & BreakpointShortNames;

export type Breakpoints = Record<BreakpointNames, Breakpoint>;
