import { truncateWithEllipsis } from './utils';

describe('truncateWithEllipsis', () => {
  it('should truncate the input string with ellipsis if it exceeds the specified length', () => {
    const input = 'This is a very long string';
    const length = 10;

    const result = truncateWithEllipsis(input, length);

    expect(result).toEqual('This is a...');
  });

  it('should return the input string not exceeding the specified length', () => {
    const input = 'Short string';
    const length = 20;

    const result = truncateWithEllipsis(input.trim(), length);

    expect(result).toEqual(input);
  });
});
