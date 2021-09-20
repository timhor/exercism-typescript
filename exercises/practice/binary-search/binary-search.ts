export function find(haystack: number[], needle: number): number | never {
  const result = binarySearch(haystack, needle, 0, haystack.length - 1);
  if (result < 0) {
    throw new Error('Value not in array');
  }
  return result;
}

function binarySearch(
  haystack: number[],
  needle: number,
  left: number,
  right: number,
): number {
  if (left > right) {
    return -1;
  }

  const middle = Math.floor((right + left) / 2);
  const middleValue = haystack[middle];

  if (needle === middleValue) {
    return middle;
  }
  if (needle < middleValue) {
    return binarySearch(haystack, needle, left, middle - 1);
  }
  return binarySearch(haystack, needle, middle + 1, right);
}
