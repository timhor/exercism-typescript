const MATCHING_BRACKET_PAIRS: { [key: string]: string } = {
  '(': ')',
  '[': ']',
  '{': '}',
};

export function isPaired(input: string): boolean {
  const stack = [];
  const chars = input.split('');
  for (let i = 0; i < chars.length; i++) {
    const curr = chars[i];
    if (curr in MATCHING_BRACKET_PAIRS) {
      stack.push(curr);
    }
    if (Object.values(MATCHING_BRACKET_PAIRS).includes(curr)) {
      const lastOpeningBracket = stack.pop();
      if (
        !lastOpeningBracket /* i.e. too many closing brackets */ ||
        MATCHING_BRACKET_PAIRS[lastOpeningBracket] !== curr
      ) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
}
