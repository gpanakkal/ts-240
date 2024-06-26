function concatenateStrings(a: string, b: string): string {
  return a + b;
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

const result = concatenateStrings("Hello", "World");
const numericResult = addNumbers(1, 2);

function combine(a: string, b: string): string
function combine(a: number, b: number): number
function combine<T extends number | string>(a: T, b: T) {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new TypeError(`a ${a} and b ${b} must both be strings or both be numbers!`);
  }
}

const conc: string = combine('hello, ', 'world');
const sum: number = combine(1, 2);

function identity<T>(arg: T): T {
  return arg;
}

function pair<T>(x: T, y: T): T[] {
  return [x, y];
}