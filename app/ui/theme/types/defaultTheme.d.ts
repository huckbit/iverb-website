import 'styled-components';
import type { Breakpoints } from './breakpoints.type';
import type Colors from './colors.type';
import Elements from './elements.type';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints;
    colors: Colors;
    elements: Elements;
    name: string;
  }
}
