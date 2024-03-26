import { render } from '@testing-library/react';
import GdprBar from './GdprBar';

test('matches snapshot', () => {
  const container = render(<GdprBar />);
  expect(container).toMatchSnapshot();
});
