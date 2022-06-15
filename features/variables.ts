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

// traditional function
function f1(a, b) {
    return a + b;
}

// traditional Anonymous Function
// dont compile
/* function (a, b) {
    return a + b
} */

// remove the word 'function'. Arrow function
(a, b) => {
    return a + b;
}

// remove the body braces
(a, b) => a + b;

// remove the argument parentheses 
// dont compile
/* a, b => a + b; */

const f2 = (a) => a + 100;

const f3 = (i: number) => {
    return i + 100;
}

const logNumber1 = (i) => {
    console.log(i);
}

const logNumber2 = (i: number) => {
    console.log(i);
}

const logNumber3: (i: number) => void = (i: number) => {
    console.log(i);
}

// 1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates.asdasdasd);

const coordinates2: {x: number, y: number} = JSON.parse(json);
// dont compile
/* console.log(coordinates2.asdasdasd); */
