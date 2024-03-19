import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import Card from './Card';
import mock from './Card.mock';

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
  const container = render(<Card verb={mock} />);
  expect(container).toMatchSnapshot();
});

test('matches snapshot with dark theme', () => {
  const container = render(
    <ThemeProvider themes={['dark']}>
      <Card verb={mock} />
    </ThemeProvider>,
  );
  expect(container).toMatchSnapshot();
});

test('renders title correctly', () => {
  render(<Card verb={mock} />);
  expect(screen.getByRole('heading')).toBeInTheDocument();
});

test('renders verb details correctly', () => {
  render(<Card verb={mock} />);
  expect(screen.getByText('was - been')).toBeInTheDocument();
});

test('renders card with truncated past verb', () => {
  const verbWithLongPast = { ...mock, past: 'a very long verb name' };
  render(<Card verb={verbWithLongPast} />);
  expect(screen.getByText('a very lon... - been')).toBeInTheDocument();
});

test('renders card with truncated past verb', () => {
  const verbWithLongPast = { ...mock, pastParticiple: 'a very long verb name' };
  render(<Card verb={verbWithLongPast} />);
  expect(screen.getByText('was - a very lon...')).toBeInTheDocument();
});
