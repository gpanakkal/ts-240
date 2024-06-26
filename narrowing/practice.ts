type Vehicle = { make: string; model: string; year: number };
type Motorcycle = Vehicle & { type: "motorcycle" };
type Car = Vehicle & { type: "car"; doors: number };

function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
  return 'type' in vehicle && vehicle.type === 'car';
}

// Usage
let myCar: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
  type: "car",
  doors: 4,
};

if (isCar(myCar)) {
  console.log(myCar.doors);
}

type Dog = {
  name: string,
  age: number,
  type: 'Dog',
}

type Bird = {
  name: string,
  wingspan: number,
  type: 'Bird',
}

type Animal = Dog | Bird; // implementation for Animal

function describeAnimal(animal: Animal): string {
  if (animal.type === 'Dog') {
    return `${animal.name} is ${animal.age} years old.`;
  } else if (animal.type === 'Bird') {
    return `${animal.name} is a bird with a ${animal.wingspan} cm wingspan.`;
  } else {
    const _exhaustiveCheck: never = '';
    return _exhaustiveCheck;
  }
}

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};
type Triangle = {
  kind: "triangle";
  base: number;
  height: number;
};

// type Shape = Circle | Square;
type Shape = Circle | Square | Triangle;

function describeShape(shape: Shape) {
  let area: number;

  switch (shape.kind) {
    case "circle":
      area = Math.PI * shape.radius ** 2;
      break;
    case "square":
      area = shape.sideLength ** 2;
      break;
    default:
      const _exhaustiveCheck: never = shape;
      // Type 'Triangle' is not assignable to type 'never'.
      throw new Error(`Invalid shape: ${JSON.stringify(_exhaustiveCheck)}`);
  }

  console.log("The area is " + area);
}