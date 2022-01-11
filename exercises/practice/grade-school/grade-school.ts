export class GradeSchool {
  private _roster: {
    // list of names per grade
    [grade: number]: string[];
  };

  private readonlyHandler = {
    set() {
      // throw away any modifications made
      return true;
    },
  };

  private removeIfExists(studentName: string) {
    for (const grade in this._roster) {
      this._roster[grade] = this._roster[grade].filter(
        (name) => name !== studentName,
      );
    }
  }

  constructor() {
    this._roster = {};
  }

  roster() {
    return Object.keys(this._roster).reduce<{ [grade: number]: string[] }>(
      (newObj, grade: string) => {
        // Object.keys returns an array of strings
        const numericalGrade = parseInt(grade);
        // use a proxy to avoid throwing error on insertion,
        // as with Object.freeze(this._roster[item])
        newObj[numericalGrade] = new Proxy(
          this._roster[numericalGrade],
          this.readonlyHandler,
        );
        return newObj;
      },
      {},
    );
  }

  add(studentName: string, grade: number) {
    if (!this._roster[grade]) {
      this._roster[grade] = [];
    }
    this.removeIfExists(studentName);
    const grades = this._roster[grade];
    let found = 0;
    for (let i = 0; i < grades.length; i++) {
      const item = grades[i];
      if (studentName.localeCompare(item) < 0) {
        found = i;
        break;
      }
      found = i + 1;
    }
    this._roster[grade] = grades
      .slice(0, found)
      .concat(studentName)
      .concat(grades.slice(found));
  }

  grade(grade: number) {
    if (!this._roster[grade]) {
      this._roster[grade] = [];
    }
    // use a proxy to avoid throwing error on insertion,
    // as with Object.freeze(this._roster[grade])
    return new Proxy(this._roster[grade], this.readonlyHandler);
  }
}
