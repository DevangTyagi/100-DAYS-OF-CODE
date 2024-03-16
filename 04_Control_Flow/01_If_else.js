// IF statement

//Operators used in comparison------- <,>,==,===,<=,>=,!==

const score = 200;

if(score>100){
    const power = "fly"
    console.log(`User power is: ${power}`);
}

console.log(`${power}`);  // As scope of power is only valid till if scope so it can't be fetched in remaining global scope

const balance = 1000;

if (balance > 500) console.log("test");   //Implicit scope

if (balance < 500) {
  console.log("lesst than");
} else if (balance < 800) {
  console.log("less than 800");
} else if (balance < 1400) {
  console.log("less than 1400");
}


const userloggedin = true
const debit_card = true
const loggedinfromgoogle=false

if(userloggedin && debit_card){
    console.log("Allow to purchase");    // similarly we can use || to check OR condition
}

