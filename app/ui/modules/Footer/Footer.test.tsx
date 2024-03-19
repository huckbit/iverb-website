import { render } from '@testing-library/react';
import Footer from './Footer';

test('matches snapshot', () => {
  const container = render(<Footer />);
  expect(container).toMatchSnapshot();
});