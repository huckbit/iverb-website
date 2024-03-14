import { render } from '@testing-library/react';
import Block from './block';
import mock from './block.mock';

test('matches snapshot', () => {
  const { asFragment } = render(<Block>{mock.past}</Block>);
  expect(asFragment()).toMatchSnapshot();
});
