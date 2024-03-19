/**
 * Checks if a string is long.
 * @param input - The input string to check.
 * @returns `true` if the string is long, `false` otherwise.
 */
export function isLongString(input: string) {
  return input.length >= 15;
}

/**
 * Truncates a string with an ellipsis if it exceeds a specified length.
 *
 * @param input - The string to truncate.
 * @param length - The maximum length of the truncated string. Default is 12.
 * @returns The truncated string with an ellipsis if necessary.
 */
export function truncateWithEllipsis(input: string, length: number = 12) {
  if (input.length > length) {
    return input.substring(0, length).trim() + '...';
  } else {
    return input;
  }
}

const utils = {
  isLongString,
  truncateWithEllipsis,
  // Other utility functions to be exported here
};

export default utils;
