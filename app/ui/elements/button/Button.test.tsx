import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import mock from './Button.mock';

describe('Button', () => {
  test('matches snapshot', () => {
    const container = render(<Button>Click me</Button>);
    expect(container).toMatchSnapshot();
  });

  test('renders button with correct text', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  // test('applies primary variant class by default', () => {
  //   render(<Button>Click me</Button>);
  //   const buttonElement = screen.getByText('Click me');
  //   expect(buttonElement).toHaveClass('primary');
  // });

  test('applies secondary variant class when variant prop is set to "secondary"', () => {
    render(<Button variant='secondary'>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toHaveClass('secondary');
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
