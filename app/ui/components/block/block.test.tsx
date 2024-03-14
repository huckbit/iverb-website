import { render } from '@testing-library/react';
import Block from './Block';
import mock from './Block.mock';

test('matches snapshot', () => {
  const { asFragment } = render(<Block>{mock.past}</Block>);
  expect(asFragment()).toMatchSnapshot();
});
