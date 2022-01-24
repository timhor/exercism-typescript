# TypeScript

[![configlet](https://github.com/exercism/typescript/actions/workflows/configlet.yml/badge.svg)](https://github.com/exercism/typescript/actions/workflows/configlet.yml) [![typescript / ci](https://github.com/exercism/typescript/workflows/typescript%20/%20main/badge.svg)](https://github.com/exercism/typescript/actions?query=workflow%3A%22typescript+%2F+main%22)

**Exercism exercises in TypeScript**

This is the TypeScript track, one of the many tracks on [exercism][web-exercism].
It holds all the _exercises_ that are currently implemented and available for students to complete.
The track consists of various **core** exercises - the ones a student _must_ complete - and each **core** exercise may unlock various _side_ exercises.
You can find this in the [`config.json`][file-config].

> In version 3 of exercism, the above no longer holds. See the [`exercism/v3`][git-v3] repository for more information.

## Tools

See [CONTRIBUTING.md][file-contributing] for a list of requirements to contribute to this track.
It also has a list of tools you can use, of which the `test` tool is one of them.

## Running the test suite

This runs `jest` tests for all sample solutions.
This _does not_ use the regular way to run `jest`, because the example solution files must be renamed to be imported correctly into the test files.

```shell
yarn babel-node scripts/test
```

If the `ASSIGNMENT` environment variable is set, only _that_ exercise is tested.
For example, if you only want to test the `two-fer.example.ts` for `two-fer`, you may, depending on your environment, use:

```shell
ASSIGNMENT=two-fer yarn babel-node scripts/test
```

> Running on Windows? Depending on your shell, environment variables are set differently.
> You can use `cross-env` to normalize this. The following should work across environments:
>
> ```bash
> yarn cross-env ASSIGNMENT=two-fer babel-node scripts/test
> ```

## Related repositories

- [Website Copy][git-website-copy] (Mentor Notes)
- [The TypeScript Analyzer][git-typescript-analyzer]
- [The TypeScript Representer][git-typescript-representer]
- [The TypeScript Test Runner][git-typescript-test-runner]

### Related JavaScript repositories

A lot of the improvements made to this track and tooling, is also made to the JavaScript track and tooling and vice-versa.

- [The JavaScript track][git-javascript]
- [The JavaScript Analyzer][git-javascript-analyzer] (Automated Code Analysis)
- [The JavaScript Representer][git-javascript-representer]
- [The JavaScript Test Runner][git-javascript-test-runner]

[web-exercism]: https://exercism.io
[file-config]: https://github.com/exercism/typescript/blob/master/config.json
[file-contributing]: https://github.com/exercism/typescript/blob/master/CONTRIBUTING.md
[git-javascript]: https://github.com/exercism/javascript
[git-javascript-analyzer]: https://github.com/exercism/javascript-analyzer
[git-javascript-representer]: https://github.com/exercism/javascript-representer
[git-javascript-test-runner]: https://github.com/exercism/javascript-test-runner
[git-typescript]: https://github.com/exercism/typescript/
[git-typescript-analyzer]: https://github.com/exercism/typescript-analyzer
[git-typescript-representer]: https://github.com/exercism/typescript-representer
[git-typescript-test-runner]: https://github.com/exercism/typescript-test-runner
[git-v3]: https://github.com/exercism/v3
[git-website-copy]: https://github.com/exercism/website-copy

---

## Instructions

1. `cd` into an exercise under `exercises/practice`
2. Run `yarn install`
3. Run `yarn test --watch`

## Progress

For a randomly picked suggestion on which exercise to try next, run `yarn next-exercise`.

- [ ] [hello-world](./exercises/practice/hello-world)
- [ ] [two-fer](./exercises/practice/two-fer)
- [ ] [resistor-color-duo](./exercises/practice/resistor-color-duo)
- [ ] [leap](./exercises/practice/leap)
- [ ] [resistor-color](./exercises/practice/resistor-color)
- [ ] [rna-transcription](./exercises/practice/rna-transcription)
- [ ] [space-age](./exercises/practice/space-age)
- [ ] [dnd-character](./exercises/practice/dnd-character)
- [ ] [pangram](./exercises/practice/pangram)
- [ ] [bob](./exercises/practice/bob)
- [ ] [matrix](./exercises/practice/matrix)
- [ ] [robot-name](./exercises/practice/robot-name)
- [x] [grade-school](./exercises/practice/grade-school)
- [ ] [clock](./exercises/practice/clock)
- [ ] [secret-handshake](./exercises/practice/secret-handshake)
- [x] [binary-search](./exercises/practice/binary-search)
- [ ] [linked-list](./exercises/practice/linked-list)
- [ ] [rational-numbers](./exercises/practice/rational-numbers)
- [ ] [atbash-cipher](./exercises/practice/atbash-cipher)
- [ ] [simple-cipher](./exercises/practice/simple-cipher)
- [?] [wordy](./exercises/practice/wordy)
- [ ] [list-ops](./exercises/practice/list-ops)
- [ ] [word-count](./exercises/practice/word-count)
- [ ] [difference-of-squares](./exercises/practice/difference-of-squares)
- [ ] [gigasecond](./exercises/practice/gigasecond)
- [x] [reverse-string](./exercises/practice/reverse-string)
- [ ] [triangle](./exercises/practice/triangle)
- [ ] [collatz-conjecture](./exercises/practice/collatz-conjecture)
- [ ] [etl](./exercises/practice/etl)
- [ ] [protein-translation](./exercises/practice/protein-translation)
- [ ] [raindrops](./exercises/practice/raindrops)
- [ ] [hamming](./exercises/practice/hamming)
- [ ] [nucleotide-count](./exercises/practice/nucleotide-count)
- [ ] [scrabble-score](./exercises/practice/scrabble-score)
- [ ] [allergies](./exercises/practice/allergies)
- [ ] [perfect-numbers](./exercises/practice/perfect-numbers)
- [ ] [complex-numbers](./exercises/practice/complex-numbers)
- [ ] [luhn](./exercises/practice/luhn)
- [ ] [grains](./exercises/practice/grains)
- [ ] [pythagorean-triplet](./exercises/practice/pythagorean-triplet)
- [ ] [sum-of-multiples](./exercises/practice/sum-of-multiples)
- [ ] [acronym](./exercises/practice/acronym)
- [ ] [anagram](./exercises/practice/anagram)
- [ ] [isogram](./exercises/practice/isogram)
- [ ] [roman-numerals](./exercises/practice/roman-numerals)
- [ ] [series](./exercises/practice/series)
- [ ] [phone-number](./exercises/practice/phone-number)
- [ ] [two-bucket](./exercises/practice/two-bucket)
- [ ] [variable-length-quantity](./exercises/practice/variable-length-quantity)
- [ ] [largest-series-product](./exercises/practice/largest-series-product)
- [ ] [food-chain](./exercises/practice/food-chain)
- [ ] [house](./exercises/practice/house)
- [ ] [isbn-verifier](./exercises/practice/isbn-verifier)
- [ ] [pig-latin](./exercises/practice/pig-latin)
- [ ] [proverb](./exercises/practice/proverb)
- [ ] [twelve-days](./exercises/practice/twelve-days)
- [ ] [beer-song](./exercises/practice/beer-song)
- [ ] [say](./exercises/practice/say)
- [ ] [rectangles](./exercises/practice/rectangles)
- [ ] [saddle-points](./exercises/practice/saddle-points)
- [ ] [spiral-matrix](./exercises/practice/spiral-matrix)
- [ ] [transpose](./exercises/practice/transpose)
- [ ] [ocr-numbers](./exercises/practice/ocr-numbers)
- [ ] [nth-prime](./exercises/practice/nth-prime)
- [ ] [alphametics](./exercises/practice/alphametics)
- [ ] [connect](./exercises/practice/connect)
- [ ] [bowling](./exercises/practice/bowling)
- [ ] [prime-factors](./exercises/practice/prime-factors)
- [ ] [diamond](./exercises/practice/diamond)
- [ ] [pascals-triangle](./exercises/practice/pascals-triangle)
- [ ] [binary-search-tree](./exercises/practice/binary-search-tree)
- [ ] [sublist](./exercises/practice/sublist)
- [ ] [custom-set](./exercises/practice/custom-set)
- [ ] [circular-buffer](./exercises/practice/circular-buffer)
- [ ] [word-search](./exercises/practice/word-search)
- [ ] [sieve](./exercises/practice/sieve)
- [ ] [palindrome-products](./exercises/practice/palindrome-products)
- [ ] [diffie-hellman](./exercises/practice/diffie-hellman)
- [ ] [robot-simulator](./exercises/practice/robot-simulator)
- [ ] [armstrong-numbers](./exercises/practice/armstrong-numbers)
- [ ] [run-length-encoding](./exercises/practice/run-length-encoding)
- [ ] [rotational-cipher](./exercises/practice/rotational-cipher)
- [ ] [strain](./exercises/practice/strain)
- [ ] [accumulate](./exercises/practice/accumulate)
- [ ] [all-your-base](./exercises/practice/all-your-base)
- [ ] [flatten-array](./exercises/practice/flatten-array)
- [x] [matching-brackets](./exercises/practice/matching-brackets)
- [ ] [minesweeper](./exercises/practice/minesweeper)
- [ ] [kindergarten-garden](./exercises/practice/kindergarten-garden)
- [ ] [queen-attack](./exercises/practice/queen-attack)
- [ ] [react](./exercises/practice/react)
- [ ] [crypto-square](./exercises/practice/crypto-square)
- [ ] [knapsack](./exercises/practice/knapsack)
