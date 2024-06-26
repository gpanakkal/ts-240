"use strict";
{
    function isCar(vehicle) {
        return 'type' in vehicle && vehicle.type === 'car';
    }
    // Usage
    let myCar = {
        make: "Toyota",
        model: "Camry",
        year: 2021,
        type: "car",
        doors: 4,
    };
    if (isCar(myCar)) {
        console.log(myCar.doors);
    }
    function describeSmallAnimal(animal) {
        if (animal.type === 'Dog') {
            return `${animal.name} is ${animal.age} years old.`;
        }
        else if (animal.type === 'Bird') {
            return `${animal.name} is a bird with a ${animal.wingspan} cm wingspan.`;
        }
        else {
            const _exhaustiveCheck = animal;
            throw new Error(`Invalid Animal ${JSON.stringify(_exhaustiveCheck)}`);
        }
    }
    function describeShape(shape) {
        let area;
        switch (shape.kind) {
            case "circle":
                area = Math.PI * Math.pow(shape.radius, 2);
                break;
            case "square":
                area = Math.pow(shape.sideLength, 2);
                break;
            case 'triangle':
                area = 0.5 * shape.base * shape.height;
                break;
            default:
                const _exhaustiveCheck = shape;
                // Type 'Triangle' is not assignable to type 'never'.
                throw new Error(`Invalid shape: ${JSON.stringify(_exhaustiveCheck)}`);
        }
        console.log("The area is " + area);
    }
}
{
    const describeAnimal = (animal) => {
        if (animal.kind === 'elephant') {
            return `An elephanta weights ${animal.weight} kg.`;
        }
        if (animal.kind === 'tiger') {
            return `A tiger can sprint at ${animal.speed} km/h.`;
        }
        if (animal.kind === 'peacock') {
            return `A peacock's feathers grow to ${animal.featherLength} cm in length`;
        }
        const _exhaustiveCheck = animal;
        throw new Error(`Arg is not a known Animal: ${JSON.stringify(_exhaustiveCheck)}`);
    };
}
{
    function processInput(input) {
        if (typeof input === 'string')
            console.log(input.toUpperCase());
        if (typeof input === 'number')
            console.log(input.toFixed(2));
        if (Array.isArray(input))
            console.log(input.length);
    }
    processInput("hello"); // Outputs: HELLO
    processInput(42); // Outputs: 42.00
    processInput([1, 2, 3]); // Outputs: 3
}
// TYPE SOUNDNESS
{
    const isNumber = (val) => typeof val === 'number' && !Number.isNaN(val);
    // example 1
    let x = "Launch School";
    if (isNumber(x)) {
        const y = x;
        console.log(y);
    }
    const safeGet = (arr, i) => ((i >= 0 && i < arr.length) ? arr[i] : undefined);
    const names = ["John", "Jane"];
    const name = safeGet(names, 2); // Should return undefined
    const numbers = [1, 2, 3];
    const number = safeGet(numbers, 1); // Should return 2
}
{
    function processData(data) {
        if (typeof data === 'string') {
            return `Hello, ${data}`;
        }
        else if (typeof data === 'number') {
            return `Age: ${data}`;
        }
        else {
            throw new TypeError(`Invalid data`);
        }
    }
    // Usage
    console.log(processData("Alice")); // Should print: "Hello, Alice"
    console.log(processData(25)); // Should print: "Age: 25"
    console.log(processData(true)); // Should throw an error: "Invalid data"
}
