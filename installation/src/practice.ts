const mapToNumbers = (arr: string[]): number[] => arr.map(Number);

type calcOperation = 'add' | 'subtract' | 'multiply' | 'divide';

function calculate(operation: calcOperation, a: number, b: number): number {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      throw new Error("Invalid operation");
  }
}

function concatenate(a: string, b: string): string
function concatenate(a: number, b: number): number
function concatenate(a: string | number, b: string | number) {
  return a + b;
}

const result = concatenate("Hello", "World");
const numericResult = concatenate(1, 2);

console.log(result);
console.log(numericResult);