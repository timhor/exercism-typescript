const plain = 'abcdefghijklmnopqrstuvwxyz';

const getCipher = (offset: number) => {
  const plainX2 = plain + plain;
  return plainX2.slice(offset, offset + plain.length);
};

export function rotate(input: string, offset: number) {
  const cipher = getCipher(offset);
  const splitInput = [...input];
  const rotatedInput = [];
  for (const inputValue of splitInput) {
    const isCapital = inputValue === inputValue.toLocaleUpperCase();
    const inputValueIndex = plain.indexOf(inputValue.toLowerCase());
    rotatedInput.push(
      isCapital
        ? cipher[inputValueIndex].toUpperCase()
        : cipher[inputValueIndex],
    );
  }
  return rotatedInput.join('');
}
