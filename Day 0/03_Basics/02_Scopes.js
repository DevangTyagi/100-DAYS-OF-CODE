let a = 400;

if (true) {
  let a = 10;
  const b = 20;
  // var c = 30
  //   console.log(`Block scope value of a : ${a}`);
}

// console.log(a);
// console.log(b);
// console.log(c);    // var is not used due to misassumption of scope in it

//   ***************Global and block scope***************

// console.log(`Global scope value of a : ${a}`); //Block scope of a variable is its value and attributes define inside the block.

// NOTE:-Varibles of global scope can be accessed in block scope but vice versa is not possible

function one() {
  const username = "Hitesh Sir";

  function two() {
    const website = "Youtube";
    console.log(username);
  }
//  console.log(website);

  two();
}

// one();


if(true)
{
    const username = "Hitesh Sir"
    if(username === "Hitesh Sir"){
        const website = " Youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);




//    **************Interesting ***************

function addone(num){
    return num+1
}
                                
console.log(addone(3));   // this statement is also used before the initialisation of the function

const addtwo = function(num){  // this is another way of honding the function inside the variable so tht we could use it more efficiently
 return num+2
}

console.log(addtwo(6));//this statement cannot be used before the initialisation of the function because we are storing the return vslue in a funtion variable

