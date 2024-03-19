import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

test('renders pagination buttons correctly', () => {
  const handlePageChange = jest.fn();
  render(<Pagination page={1} totalPages={5} handlePageChange={handlePageChange} />);

  // Check if previous button is disabled
  const buttons = screen.getAllByRole('button');
  expect(buttons[0]).toBeDisabled();

  // Check if all page buttons are rendered
  expect(buttons).toHaveLength(7);

  // Check if next button is enabled
  expect(buttons[buttons.length - 1]).toBeEnabled();
});

test('calls handlePageChange correctly when previous button is clicked', () => {
  const handlePageChange = jest.fn();
  render(<Pagination page={2} totalPages={5} handlePageChange={handlePageChange} />);

  const buttons = screen.getAllByRole('button');
  fireEvent.click(buttons[0]);

  expect(handlePageChange).toHaveBeenCalledWith(1);
});

test('calls handlePageChange correctly when next button is clicked', () => {
  const handlePageChange = jest.fn();
  render(<Pagination page={4} totalPages={5} handlePageChange={handlePageChange} />);

  const buttons = screen.getAllByRole('button');
  fireEvent.click(buttons[buttons.length - 1]);

  expect(handlePageChange).toHaveBeenCalledWith(5);
});

test('calls handlePageChange correctly when a page button is clicked', () => {
  const handlePageChange = jest.fn();
  render(<Pagination page={3} totalPages={5} handlePageChange={handlePageChange} />);

  const buttons = screen.getAllByRole('button');
  fireEvent.click(buttons[4]);

  expect(handlePageChange).toHaveBeenCalledWith(4);
});
