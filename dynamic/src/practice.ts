{
  interface Animal {
    name: string;
    makeSound(): string;
  }

  interface Dog extends Animal {
    fetch(): string;
  }

  const myDog: Dog = {
    name: 'Rex',
    makeSound() {
      return 'Woof';
    },

    fetch() {
      return `${this.name} fetches a stick.`
    },
  }

  myDog.fetch();
}
{
  type Product = {
    name: string;
    price: number;
  };
  
  type Shipping = {
    weight: number;
    shippingCost: number;
  };

  // interface ShippableProduct extends Product, Shipping {};
  type ShippableProduct = Product & Shipping;
  type Keys = keyof ShippableProduct;
}
{
  interface Product {
    name: string;
    price: number;
  }

  interface Shipping {
    weight: number;
    shippingCost: number;
  }

  interface ShippableProduct extends Product, Shipping {};

  type Keys = keyof ShippableProduct;
  const myProduct: ShippableProduct = {
    name: 'toaster',
    price: 20.00,
    weight: 2,
    shippingCost: 5.00,
  }

  interface JSONData {
    [key: string]:
      | string
      | number
      | boolean
      | null
      | JSONData
      | Array<keyof JSONData>;
  }

  const jsonData: JSONData = JSON.parse(
    '{ "name": "John", "age": 30, "address": { "street": "123 Main St", "city": "Anytown", "state": "CA" }, "hobbies": ["reading", "music"] }'
  );

  type User =Map<number, string>

  const obj: User = new Map();
  obj.set(1, 'Jane');
  obj.set(2, '30');
  obj.set(3, 'female');
  console.log(Object.keys(obj).every((key) => typeof key === "number"));
  console.log(BigInt instanceof Number);
}
{
  type CustomArray = {
    [index: number]: string | number;
  };
  
  const customArray: CustomArray = ["apple", 42, "banana"];
  const customArray2: CustomArray = { // this fails the .isArray check
    0: "apple", 
    1: 42, 
    2: "banana",
  };

  function processCustomArray(arr: CustomArray) {
    if (Array.isArray(arr)) {
      return arr.filter((el) => typeof el === 'string').map((str) => str.toUpperCase());
    }
    return [];
  }

  interface CustomObject {
    [key: string]: unknown;
  }

  const logObject = (obj: CustomObject) => {
    Object.keys(obj).forEach((key) => console.log(`${key}: ${obj[key]}`));
  }

  interface Person extends CustomObject {
    firstName: string;
    lastName: string;
  }

  const person: Person = { firstName: 'John', lastName: 'Doe' };
  logObject(person);
}
{
  
  interface CustomObject {
    [key: string]: unknown;
  }

  const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    const value = obj[key];
    return value;
  }

  
  const obj = {
    name: "John",
    age: 30,
  };

  const x = getProperty(obj, "name");
  const y = getProperty(obj, "age");
}
{
  function getProperty<T, K extends keyof T>(obj: T , key: K): T[K] {
    return obj[key];
  } 

  const obj = {
    name: "John",
    age: 30,
  };

  const x = getProperty(obj, "name");
  const y = getProperty(obj, "age");
}
{
  type VehicleCommon = {
    make: string;
    model: string;
    year: number;
  };
  
  const bodyTypes = <const>["sedan", "hatchback", "coupe", "convertible", "wagon"];
  type BodyType = typeof bodyTypes[number];
  // type BodyType = typeof (["sedan", "hatchback", "coupe", "convertible", "wagon"] as const)[number];
  const bodytype: BodyType = 'convertible'

  type Car = VehicleCommon & {
    bodyType: BodyType;
    numDoors: 2 | 4;
  };
  
  type Truck = VehicleCommon & {
    bodyType: "pickup" | "box";
    numWheels: 4 | 6 | 8;
    payloadCapacity: number;
  };
  
  type Vehicle = Car | Truck;
}