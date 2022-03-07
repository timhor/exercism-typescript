//
// This is only a SKELETON file for the 'Kindergarten Garden' exercise.
// It's been provided as a convenience to get you started writing code faster.
//

const DEFAULT_STUDENTS: Student[] = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
];

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
} as const;

type Student = string;
type PlantKey = keyof typeof PLANT_CODES;
type Plant = typeof PLANT_CODES[PlantKey];
type Plants = Plant[];
type Pots = Plants[];

function isPlantKey(key: string): key is PlantKey {
  return PLANT_CODES.hasOwnProperty(key);
}

export class Garden {
  #plants: PlantKey[][];
  #students: Student[];

  constructor(diagram: string, students = DEFAULT_STUDENTS) {
    this.#plants = diagram
      .split('\n')
      .map((line) => line.split('').filter(isPlantKey));
    this.#students = students.sort();
  }

  public plants(student: Student): Plants {
    const indexOfStudent = this.#students.indexOf(student);
    if (indexOfStudent > -1) {
      return [
        this.#plants[0][indexOfStudent * 2],
        this.#plants[0][indexOfStudent * 2 + 1],
        this.#plants[1][indexOfStudent * 2],
        this.#plants[1][indexOfStudent * 2 + 1],
      ].map((code) => PLANT_CODES[code]);
    }
    return [];
  }
}
