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
    for (let i = 0; i < this.#list.length; i++) {
      if (this.#list[i] !== otherList.#list[i]) {
        return false;
      }
    }
    return true;
  }

  //   1 2 3 4 5
  // i   ^
  //   2 3 4
  // j ^
  // j is not another loop, it's just a 'pointer' to an index
  // if it matches, increment both i and j
  // as soon as there's a mismatch, return 'unequal'

  // alternatively: compare contents of the smaller array with a window of the larger array of same length (reuses hasSameContents, but is O(N^2))

  isSubset(otherList: List): boolean {
    otherList.#list.forEach((val, index) => {
      this.#list.forEach((val2, index2) => {
        console.log(val, val2);
        if (val !== val2) {
          return false;
        } else {
          return true;
        }
      });
    });
    return false;
  }

  // listOne.compare(listTwo) where listTwo = List(1, 1, 2)
  compare(otherList: List): CompareResult {
    if (this.isEmpty() && otherList.isEmpty()) {
      return 'equal';
    } else if (this.isEmpty() && !otherList.isEmpty()) {
      return 'sublist';
    } else if (!this.isEmpty() && otherList.isEmpty()) {
      return 'superlist';
    }
    if (
      this.#list.length === otherList.#list.length &&
      this.hasSameContents(otherList)
    ) {
      return 'equal';
    }
    if (this.#list.length < otherList.#list.length) {
      this.isSubset(otherList);
    }
    return 'unequal';
  }
}
