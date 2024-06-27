{
  interface Shape {
    color: string;
  }
  interface Rectangle extends Shape {
    length: number;
    width: number;
  }
  
  interface Circle extends Shape {
    radius: number;
  }

  type ShapeUnion = Rectangle | Circle;

  const displayShapeInfo = (shape: ShapeUnion): string => {
    if ('radius' in shape) {
      return `Circle with radius ${shape.radius}`;
    } else if ('length' in shape && 'width' in shape) {
      return `Rectangle with length ${shape.length} and width ${shape.width}`;
    } else {
      const _exhaustiveCheck: never = shape;
      throw new TypeError(`Argument ${JSON.stringify} must be a Shape!`);
    }
  }
}
{
  type A = { a: number, b: number };
  type B = { c: number, d: number };
  type Combined = A & B;
  type keys = keyof Combined;
  const myArr: keys[] = ['a', 'b', 'c', 'd']
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const obj3: A & B = { ...obj1, ...obj2 };
  console.log(obj3); // Output: { a: 1, b: 2, c: 3, d: 4 }
}
{
  interface Person {
    name: string;
    age: number;
    email: string;
  }
  
  const person: Person = { name: "John", age: 30, email: 'john@example.com' };
  const newPerson: Person = { age: 31, ...person };

  const samePerson: Person = { name: "John", age: 30, email: 'john_doe@example.com' };
  const merged: Person = { ...person, ...samePerson };
}
{
  function calculateRectangleArea(
    width: number,
    height: number,
    { unit = "sq. ft" }: { unit?: string } = {}
  ): string {
    const area = width * height;
    return `${area} ${unit}`;
  }

  calculateRectangleArea(3, 4, {});
}
{
  type NameOptions = Partial<{ firstName: string, lastName: string, title: string }>;
  const formatName = ({
    title,
    firstName = 'John',
    lastName = 'Doe',
  }: NameOptions = {}) => {
    return `${[title, firstName, lastName].filter((el) => el).join(' ')}`;
  }

  const formattedName = formatName({
    firstName: "Jane",
    lastName: "Smith",
    title: "Dr.",
  });
  
  console.log(formattedName); // "Dr. Jane Smith"
  console.log(formatName({})); // John Doe
}