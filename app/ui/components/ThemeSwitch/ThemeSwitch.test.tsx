import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'next-themes';
import ThemeSwitch from './ThemeSwitch';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test('matches snapshot', () => {
  const container = render(<ThemeSwitch />);
  expect(container).toMatchSnapshot();
});

test('matches snapshot with dark theme', () => {
  const container = render(
    <ThemeProvider themes={['dark']}>
      <ThemeSwitch />
    </ThemeProvider>,
  );
  expect(container).toMatchSnapshot();
});

// test('switches theme to dark on click', async () => {
//     const setTheme = jest.fn();
//   render(
//     <ThemeProvider>
//       <ThemeSwitch />
//     </ThemeProvider>,
//   );

//   const button = screen.getByRole('button', { hidden: true });
//   await userEvent.click(button);

//   expect(mockOnChange).toHaveBeenCalled();
// });

// test('switches theme to light on click', () => {
//   const mockOnChange = jest.fn();
//   render(
//     <ThemeProvider themes={['dark']}>
//       <ThemeSwitch />
//     </ThemeProvider>,
//   );

//   const button = screen.getByRole('button', { hidden: true });
//   userEvent.click(button);

//   expect(mockOnChange).toHaveBeenCalled();
// });
