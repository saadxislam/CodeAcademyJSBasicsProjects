//Forecast today in Kelvin

const kelvin = 0;

//Celsius is 273 less than kelvin
const celsius = kelvin - 273;

//Formula for converting celsius to F
let fahrenheit = Math.floor((celsius * (9/5)) + 32);

console.log(`The temperation is ${fahrenheit} degrees Fahrenheit.`);

//Convert celsius to Newton scale
const newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton`);