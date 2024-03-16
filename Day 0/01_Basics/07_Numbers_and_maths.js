const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString()); // Now Balance is converted into string hence its prototype is string
console.log(balance.toFixed(3)); // Used in precise calculation of numeric figures

const othernumber = 323.8467;
console.log(othernumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-In")); // to convert given number into indian readeable format

//  ***********************MATHS**********************

console.log(Math.abs(-45));
console.log(Math.round(4.46));
console.log(Math.ceil(4.56));
console.log(Math.floor(4.89));
console.log(Math.max("34", "67", "89"));
console.log(Math.min(34, 67, 89));

console.log(Math.random());
//Math.random()always gives values in range of zero to one
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min);
