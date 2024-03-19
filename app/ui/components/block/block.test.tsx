import { render } from '@testing-library/react';
import Block from './Block';
import mock from './Block.mock';

test('matches snapshot', () => {
  const container = render(<Block variant='past'>{mock.past}</Block>);
  expect(container).toMatchSnapshot();
});

test('renders children', () => {
  const { getByText } = render(<Block>{mock.past}</Block>);
  expect(getByText(mock.past)).toBeInTheDocument();
});

test('applies variant class', () => {
  const { container } = render(<Block variant='past'>{mock.past}</Block>);
  expect(container.firstChild).toHaveClass('past');
});

test('applies longText class for long strings', () => {
  const longString = 'This is a long string that exceeds 20 characters';
  const { container } = render(<Block>{longString}</Block>);
  expect(container.firstChild).toHaveClass('longText');
});
