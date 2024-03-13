// components/ThemeWrapper.tsx
import { ThemeProvider } from 'styled-components';
import lightTheme from '@theme/lightTheme';

export default function ThemeWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}
