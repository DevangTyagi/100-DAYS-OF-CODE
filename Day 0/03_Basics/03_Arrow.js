const user = {
  username: "Hitesh Sir",
  price: 999,

  welcomemesage: function () {
    console.log(`${this.username} , welcome to website`); // this keyword is used to define the current context
    console.log(this); //Gives the current context of the object
  },
};

user.welcomemesage();
user.username = "Devang"; // this valu is changable and not hardcoded hence this use current context thing that decides to maintain username as Devang in place of Hitesh Sir
user.welcomemesage();

console.log(this); // this will provide us an empty object

function chai() {
  let username = "Devang";
  console.log(this.username); // it will give undefined value,hence it is proved that dereferencing by this works in objects but dont work in funtions
}

chai();

//                    ******************ARROW FUNCTUON************************

const chai = () => {
  //funtion is removed and a arrow is inserted after paranthesis
  let username = "Hitesh Sir";
  console.log(this.username);
};
chai();

const addtwo = (num1, num2) => {
  return num1 + num2; // if paranthesis() is used in arrow function then no need of return statement but if curly braces are used then we need to give proper return statement (explicit return)
  // for implicit return we need to write  (num1 , num2) => (num1+num2)
};

console.log(addtwo(7, 3));

//                        ******************************IIFI********************************

(function chaii() {
  console.log(`DB Connected`); // ()() are used here in which first one is providing us the environment to work inside a block and next() is imple it
})(); // this is called IIFI(Immediately invoked function expression) which is used to reduce the pollution of global scope variables  // invoking of function is stoped by using a " ; " after iifi function
