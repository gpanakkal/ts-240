"use strict";
{
    const myDog = {
        name: 'Rex',
        makeSound() {
            return 'Woof';
        },
        fetch() {
            return `${this.name} fetches a stick.`;
        },
    };
    console.log(myDog.fetch());
}
{
}
{
    ;
    const myProduct = {
        name: 'toaster',
        price: 20.00,
        weight: 2,
        shippingCost: 5.00,
    };
    const jsonData = JSON.parse('{ "name": "John", "age": 30, "address": { "street": "123 Main St", "city": "Anytown", "state": "CA" }, "hobbies": ["reading", "music"] }');
    const obj = new Map();
    obj.set(1, 'Jane');
    obj.set(2, '30');
    obj.set(3, 'female');
    console.log(Object.keys(obj).every((key) => typeof key === "number"));
    console.log(BigInt instanceof Number);
}
