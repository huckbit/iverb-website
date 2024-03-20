import { render, screen } from '@testing-library/react';
import Loading from './Loading';

test('matches snapshot', () => {
  const container = render(<Loading />);
  expect(container).toMatchSnapshot();
});

test('it renders the loading message correctly', () => {
  render(<Loading message='Loading...' />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
