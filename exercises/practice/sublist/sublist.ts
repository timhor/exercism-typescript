type CompareResult = 'equal' | 'unequal' | 'sublist' | 'superlist';

export class List {
  #list: number[];

  // List(1, 1, 2)
  constructor(...args: number[]) {
    this.#list = args;
  }

  isEmpty(): boolean {
    return this.#list.length === 0;
  }

  hasSameContents(otherList: List): boolean {
    return this.#list.every((value, index) => otherList.#list[index] === value);
  }

  // Compare contents of the smaller array with a window of the larger array of same length
  isSubset(otherList: List): boolean {
    for (const [index, value] of otherList.#list.entries()) {
      // Only check the remainder of the list if there is a match on the first value
      if (value === this.#list[0]) {
        const slice = new List(
          ...otherList.#list.slice(index, index + this.#list.length),
        );
        const sameContents = this.hasSameContents(slice);
        if (sameContents) {
          return true;
        }
      }
    }
    return false;
  }

  compare(otherList: List): CompareResult {
    // Edge cases
    if (this.isEmpty() && otherList.isEmpty()) {
      return 'equal';
    } else if (this.isEmpty() && !otherList.isEmpty()) {
      return 'sublist';
    } else if (!this.isEmpty() && otherList.isEmpty()) {
      return 'superlist';
    }

    // Identical lists
    if (
      this.#list.length === otherList.#list.length &&
      this.hasSameContents(otherList)
    ) {
      return 'equal';
    }

    // Check subset/superset
    if (this.#list.length < otherList.#list.length) {
      const isSubset = this.isSubset(otherList);
      return isSubset ? 'sublist' : 'unequal';
    }
    if (this.#list.length > otherList.#list.length) {
      const isSuperset = otherList.isSubset(this);
      return isSuperset ? 'superlist' : 'unequal';
    }
    return 'unequal';
  }
}
