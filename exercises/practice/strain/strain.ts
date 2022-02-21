declare global {
    interface Array<T> {
        customFilter(predicate: Function): T[];
    }
}

Array.prototype.customFilter = function( predicate: Function) {
  const items = [];
  for(let i = 0; i < this.length; i++) {
    if (predicate(this[i])) {
      items.push(this[i]);
    }
  }
  return items;
}

export function keep<T>(array: T[], predicate: Function) {
  return array.customFilter(predicate);
}

export function discard<T>(array: T[], predicate: Function) {
  return array.customFilter((element: T) => {
    if (!predicate(element)) {
      return true;
    }
  });
}
