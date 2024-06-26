{
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

  function describeSmallAnimal(animal: Animal): string {
    if (animal.type === 'Dog') {
      return `${animal.name} is ${animal.age} years old.`;
    } else if (animal.type === 'Bird') {
      return `${animal.name} is a bird with a ${animal.wingspan} cm wingspan.`;
    } else {
      const _exhaustiveCheck: never = animal;
      throw new Error (`Invalid Animal ${JSON.stringify(_exhaustiveCheck)}`);
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
      case 'triangle':
        area = 0.5 * shape.base * shape.height;
        break;
      default:
        const _exhaustiveCheck: never = shape;
        // Type 'Triangle' is not assignable to type 'never'.
        throw new Error(`Invalid shape: ${JSON.stringify(_exhaustiveCheck)}`);
    }

    console.log("The area is " + area);
  }
}
{
  type Elephant = {
    kind: "elephant";
    weight: number;
  };

  type Tiger = {
    kind: "tiger";
    speed: number;
  };

  type Peacock = {
    kind: "peacock";
    featherLength: number;
  };

  type Animal = Elephant | Tiger | Peacock;

  const describeAnimal = (animal: Animal) => {
    if (animal.kind === 'elephant') {
      return `An elephanta weights ${animal.weight} kg.`;
    } if (animal.kind === 'tiger') {
      return `A tiger can sprint at ${animal.speed} km/h.`;
    } if (animal.kind === 'peacock') {
      return `A peacock's feathers grow to ${animal.featherLength} cm in length`;
    }
    const _exhaustiveCheck: never = animal;
    throw new Error(`Arg is not a known Animal: ${JSON.stringify(_exhaustiveCheck)}`);
}
}
{
  function processInput(input: any) {
    if (typeof input === 'string') console.log(input.toUpperCase());
    if (typeof input === 'number') console.log(input.toFixed(2));
    if (Array.isArray(input)) console.log(input.length);
  }
  
  processInput("hello"); // Outputs: HELLO
  processInput(42); // Outputs: 42.00
  processInput([1, 2, 3]); // Outputs: 3
}

// TYPE SOUNDNESS
{
  const isNumber = (val: unknown): val is number => typeof val === 'number' && !Number.isNaN(val);

  // example 1
  let x: any = "Launch School";
  if (isNumber(x)) {
    const y = x;
    console.log(y);
  }

  const safeGet = <T>(arr: T[], i: number): T | undefined => 
    ((i >= 0 && i < arr.length) ? arr[i] : undefined);
  
  const names: string[] = ["John", "Jane"];
  const name = safeGet(names, 2); // Should return undefined

  const numbers: number[] = [1, 2, 3];
  const number = safeGet(numbers, 1); // Should return 2
}