const usermail = ["dsdsd@gmail.com"];

if (usermail) {
  console.log("Mail fetched");
} else {
  console.log("Mail Not fetched");
}

//         ******************False values*****************

// false , 0 , -0 ,BigInt 0n , "" , null , undefined ,NaN

//   *********************Truthy values*****************

// "0" , "false" , 'false' , " " ,[] , {} , function(){}

if (usermail.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}

const emptyobj = {};

if (Object.keys(emptyobj).length === 0) {
  console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null,undefined

let val1;
// val1= 5 ?? 10
// val1 = null ?? 12;
val1= undefined ?? 15;

console.log(val1);


//Terniary Opeator

const iceteaprice =  100

iceteaprice <= 80 ? console.log("less than 80") : console.log("More than 80");