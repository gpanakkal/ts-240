{
    function isCar(vehicle) {
        return 'type' in vehicle && vehicle.type === 'car';
    }
    // Usage
    var myCar = {
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
            return "".concat(animal.name, " is ").concat(animal.age, " years old.");
        }
        else if (animal.type === 'Bird') {
            return "".concat(animal.name, " is a bird with a ").concat(animal.wingspan, " cm wingspan.");
        }
        else {
            var _exhaustiveCheck = animal;
            throw new Error("Invalid Animal ".concat(JSON.stringify(_exhaustiveCheck)));
        }
    }
    function describeShape(shape) {
        var area;
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
                var _exhaustiveCheck = shape;
                // Type 'Triangle' is not assignable to type 'never'.
                throw new Error("Invalid shape: ".concat(JSON.stringify(_exhaustiveCheck)));
        }
        console.log("The area is " + area);
    }
}
{
    var describeAnimal = function (animal) {
        if (animal.kind === 'elephant') {
            return "An elephanta weights ".concat(animal.weight, " kg.");
        }
        if (animal.kind === 'tiger') {
            return "A tiger can sprint at ".concat(animal.speed, " km/h.");
        }
        if (animal.kind === 'peacock') {
            return "A peacock's feathers grow to ".concat(animal.featherLength, " cm in length");
        }
        var _exhaustiveCheck = animal;
        throw new Error("Arg is not a known Animal: ".concat(JSON.stringify(_exhaustiveCheck)));
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
    var isNumber = function (val) { return typeof val === 'number' && !Number.isNaN(val); };
    // example 1
    var x = "Launch School";
    if (isNumber(x)) {
        var y = x;
        console.log(y);
    }
    var safeGet = function (arr, i) {
        return ((i >= 0 && i < arr.length) ? arr[i] : undefined);
    };
    var names = ["John", "Jane"];
    var name_1 = safeGet(names, 2); // Should return undefined
    var numbers = [1, 2, 3];
    var number = safeGet(numbers, 1); // Should return 2
}
{
    function processData(data) {
        if (typeof data === 'string') {
            return "Hello, ".concat(data);
        }
        else if (typeof data === 'number') {
            return "Age: ".concat(data);
        }
        else {
            throw new TypeError("Invalid data");
        }
    }
    // Usage
    console.log(processData("Alice")); // Should print: "Hello, Alice"
    console.log(processData(25)); // Should print: "Age: 25"
    console.log(processData(true)); // Should throw an error: "Invalid data"
}
