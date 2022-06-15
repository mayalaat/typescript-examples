let apples = 5;
let speed: string = 'Fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined; 

// build in objects
let now = new Date();

// arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: {x: number; y: number} = {
    x: 10,
    y: 20
}

// 1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates.asdasdasd);

const coordinates2: {x: number, y: number} = JSON.parse(json);
// dont compile
/* console.log(coordinates2.asdasdasd); */

// 2) lazy inicialation
let hasNumber: boolean;
for(let i of myNumbers) {
    if(i === 3) {
        hasNumber = true;
    }
}

// 3) union types
let numberAboveZero: boolean | number = false;
for(let i of myNumbers) {
    if(i > 0) {
        numberAboveZero = i;
    }
}