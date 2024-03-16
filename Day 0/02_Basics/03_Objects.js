// singleton-made by constructors not by literals
//object.create-Constructor method

//Object literals

const mysym = Symbol("Key1"); // Symbol declaration

const Js_user = {
  name: "Devang", // name is considered by the system as string,but the values have no contraints
  age: 20, // Even other objects can be called inside the objects i.e. nested ones
  //mysym : "Key1",    //this method is not used because through this,we will get a string data type of mysym but we want symbol datatype
  [mysym]: "Key1", //this method is correct declaration of symbol inside the object
  location: "London",
  email: "devang@google.com",
  isloggedin: false,
};

console.log(Js_user.email);
console.log(Js_user["email"]); //if email is not used as string then it will not get print and state it as undefined funtion.
console.log(Js_user[mysym]); // output will come out as sting and not as symbol

// Object.freeze(Js_user);
Js_user.email = "devangtyagi@gmail.com"; //This method is used to overwrite the object elements nut once we usethe freeze funtion on any object our value will not gonna alter in any way

console.log(Js_user["email"]);

Js_user.greeting = function () {
  console.log("Hello jsuser");
};

console.log(Js_user.greeting());

Js_user.greetingTwo = function () {
  console.log(`Hello jsuser,${this.name}`); //Interpolation of string should be remembered to fetch the attribute from the object
};

console.log(Js_user.greetingTwo()); // we are providing the values in the greetings and then nad then to fetch the values from objects
//we need interpolation i.e. backtext and then the keyname of the object inside the ${}
