const carMakers: string[] = [];
const carMakers2 = ['Ford', 'Nissan', 'Tesla'];

const carsByMake: string[][] = [];
const carsByMkae2 = [['Versa'], ['Festiva'], ['Model 3']];

// Type inference when extrating values from array
const myFutureCar: string = carMakers2.pop();
console.log(myFutureCar); // Tesla

const myFirtsCar: string = carMakers2.shift();
console.log(myFirtsCar); // Ford

// Prevent incompatibles values
// carMakers2.push(100); // dont compile

// Help with functions: map
const carMakers3 = carMakers2.map((car: string): string => {
  return car.toUpperCase();
});
console.log(carMakers3); // [ 'NISSAN' ]

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push('2022-06-22');
// importantDates.push(123); // dont compile
