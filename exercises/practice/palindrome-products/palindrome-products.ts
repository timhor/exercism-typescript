interface Input {
  maxFactor: number;
  minFactor: number;
}

type Factors = [number, number][];

type Palindrome = {
  value: number;
  factors: Factors;
};

type Output = {
  smallest: Palindrome;
  largest: Palindrome;
};

const isPalindrome = (candidate: number) =>
  candidate.toString().split('').reverse().join('') === candidate.toString();

export function generate(params: Input): Output {
  const { minFactor, maxFactor } = params;
  const allNumbers = [...Array(maxFactor + 1).keys()].filter(
    (num) => num >= minFactor,
  );
  let palindromeProducts = new Set<number>();
  let palindromeFactors: { [index: number]: Factors } = {};
  for (let i = 0; i < allNumbers.length; i++) {
    for (let j = 0; j < allNumbers.length; j++) {
      const candidate = allNumbers[i] * allNumbers[j];
      if (isPalindrome(candidate)) {
        palindromeProducts.add(candidate);
        const factors: Factors = [[allNumbers[i], allNumbers[j]]];
        palindromeFactors[candidate] = factors;
      }
    }
  }

  const smallestValue = Math.min.apply(Math, [...palindromeProducts]);
  const largestValue = Math.max.apply(Math, [...palindromeProducts]);

  return {
    smallest: {
      value: smallestValue,
      factors: palindromeFactors[smallestValue],
    },
    largest: {
      value: largestValue,
      factors: palindromeFactors[largestValue],
    },
  };
}
