export function reverse(value: string): string {
  if (value.length === 0) {
    return '';
  }
  let result = '';
  const characters = [...value];
  for (let index = characters.length - 1; index >= 0; index--) {
    result += characters[index];
  }
  return result;
}
