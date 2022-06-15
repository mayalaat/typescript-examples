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

const logNumber3 = (i: number): void => {
    console.log(i);
}

const logNumber4: (i: number) => void = (i: number) => {
    console.log(i);
}

const logNumber5: (i: number) => void = (i: number): void => {
    console.log(i);
}

// return never
const throwError = (message: string) => {
    throw new Error(message);
}

const throwError2 = (message: string): never => {
    throw new Error(message);
}

const throwError3 = (message: string): string  => {
    if(!message) {
        throw new Error(message);
    }

    return message.toLowerCase();
} 

/*==========================
JS
============================*/
const todaysWeatherJs = {
    date: new Date(),
    weather: 'sunny'
}
const logWeatherJs = (w) => {
    console.log(w.date);
    console.log(w.weather);
}
logWeatherJs(todaysWeatherJs);
logWeatherJs('todaysWeatherJs'); // compile

/*==========================
ES2015
============================*/
/* const logWeatherEs = ({d: date, w: weather} = {d: new Date(), w: 'sunny'}) => {
    console.log(date);
    console.log(weather)
} */
const logWeatherEs = ({date, weather}) => {
    console.log(date);
    console.log(weather)
}
logWeatherEs(todaysWeatherJs);

/*==========================
Typscript
============================*/
const todaysWeatherTs: {date: Date, weather: string} = {
    date: new Date(),
    weather: 'Sunny'
}
const logWeatherTs= (forecast: {date: Date, weather: string}): void =>  {
    console.log(forecast.date);
    console.log(forecast.weather)
}
logWeatherTs(todaysWeatherTs);
//logWeatherTs('todaysWeatherTs'); // dont compile

/*=========== Typscript destructuring ===============*/
const logWeatherTsDs = ({date, weather}: {date: Date, weather: string}): void =>  {
    console.log(date);
    console.log(weather)
}
logWeatherTs(todaysWeatherTs);