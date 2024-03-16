function saymyname() {
  console.log("D");
  console.log("E");
  console.log("V");
  console.log("A");
  console.log("N");
  console.log("G");
}

// if only saymyname is caleed then it will be treated as reference for the function
//while by calling saymyname() with parenthesis shows ecution
saymyname();

//Add two numbers

// function addtwonumbers(number1 , number2){
//   console.log(number1+number2);
// }

// const res=addtwonumbers(10,5)
// console.log(res);              As the inner console of function is not RETURNING or printing value in res

function addtwonumbers(number1, number2) {
  let result = number1 + number2;
  return result; // We can also return num1+num2
} //No funtion will execute after return statement

const res = addtwonumbers(10, 5);
//   console.log("Result:",res);

function loginusermessage(username = "USER") {
  // this user declared inside the parameters is the default value thst is used by the funtion in further processing
  if (username === undefined || !username) {
    console.log("please enter the username");
    return; //we want to stop function working for that we are using the return inside the if statement
  }
  return `${username} just logged in`; // string interpolation is used to concatinate the string
}

console.log(loginusermessage("Devang"));

// *****************REST OPERATOR*********************

function calculatecartprice(...num1) {
  //These three dots are used for REST mechanism i means values are openly/randomly accepted and we need to compile then all to get it in form of a bundle(array)
  return num1; // this is also noticable that REST and SPREAD operator are both represented by three dots
}

console.log(calculatecartprice(200, 400, 600));

// ********************OBJECT PASSING****************
const user = {
  username: "Hitesh Sir",
  respect: "100%",
};

function handleobject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and respect is ${anyobject.respect}`
  );
}

handleobject(user);
