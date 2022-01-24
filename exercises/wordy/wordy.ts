export class WordProblem {
  question: string = "";
  constructor(question: string) {
    this.question = question;
  }
  answer = () => {
    // parse the question when answer is called

    // all questions start with
    //  - "What is"
    // should reject too hard/irrelevant
    //
    // Input Operator
    //  - "Who is"
    // const parsed = this.question.indexOf("What is ");
    // const parsed = this.question.split("What is ");
    const aParseRegex = /What is (?<equation>.*)\?/;
    // const parsedRegex = new RegExp(aParseRegex);
    // const parsed = this.question.split("What is ");
    const matched = this.question.match(aParseRegex);

    // if parsed === undefined, we have no match
    // if parsed === null, we have no match
    if (!matched) return "No bueno";

    // typescript isn't smart enough to know that this group will always be
    // present, if matched is truthy
    // @ts-ignore
    const equation = matched.groups["equation"];

    const additionEquationResult = parseAdditionEquation(equation);

    if (additionEquationResult) {
      return additionEquationResult;
    }

    return Number(equation);
  };
}

export class ArgumentError extends Error {}

function parseAdditionEquation(equation: string): number | undefined {
  /**
   * operations
   * - plus
   * - minus
   * - multiplied by
   * divided by
   */

  const additionParseRegex =
    /(?<leftSide>-?[0-9]+) (?<operator>plus|minus|multiplied by|divided by) (?<rightSide>-?[0-9]+)(?<remaining>(.*))/;

  const additionMatched = equation.match(additionParseRegex);
  // console.log(additionMatched);

  if (!additionMatched) return undefined;

  // typescript isn't smart enough to know that this group will always be
  // present, if matched is truthy
  const { leftSide, rightSide, operator, remaining } =
    additionMatched.groups as any as {
      leftSide: string;
      rightSide: string;
      operator: string;
      remaining: string;
    };
  const left = Number(leftSide);
  const right = Number(rightSide);
  const o = operator;
  const result =
    o === "plus"
      ? left + right
      : o === "minus"
      ? left - right
      : o === "multiplied by"
      ? left * right
      : o === "divided by"
      ? left / right
      : 0;
  // console.log("remaining", remaining);

  return remaining ? parseAdditionEquation(`${result}${remaining}`) : result;

  // return Number(leftSide) + Number(rightSide);
}
