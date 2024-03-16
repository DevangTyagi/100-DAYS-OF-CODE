//Declaration through constructor

// const tinderuser = new Object()

const tinderuser = {};

tinderuser.id = "123asdf";
tinderuser.name = "Samay";
tinderuser.isloggedin = "false";

 console.log(tinderuser);

const regularuser = {
  email: "asfdg@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Devang",
      lastname: "Tyagi",
    },
  },
};

console.log(regularuser.fullname.userfullname.firstname);

const myobj1 = { 1: "a", 2: "b" };
const myobj2 = { 3: "a", 4: "b" };

const returned = Object.assign({}, myobj1, myobj2); // The first array is used as {} because all the next values are assigned to a common array i.e. the first array used inside the braces

console.log(returned);

const returned1 = { ...myobj1, ...myobj2 }; // Glass is breaked nad SPREAD all over the surface that means all the elements whether they are from array or objects are combined in normal sequence

console.log(returned1);

const user = [
  // from database we will receive arrays of objects
  {
    id: "1",
    email: "d@gmsil.com",
  },
  {},
  {},
];

user[1].email;
console.log(tinderuser);

console.log(Object.keys(tinderuser)); //THE OUTPUT OF THIS SNIPPET IS THAT IT RETURNS AL THE KEYS IN FORM OF AN ARRAY,SO WE COULD EASI;Y TRAVERSE ON THE KEYS USING THE INDICES OF THE ARRAY


//   *****************Destructuring**********************

const course = {
       coursename : "js_hindi",
       price : "900",
       courseinstructor : "Hitesh Sir"
}  

const {courseinstructor:ping} = course
// syntex -----  const {key-name:anyname}=object name
//Here we are improvising the method to call an keys from the object
console.log(ping);

//REACT PART
const navbar = ({company}) => {       //intead of usong props.company in mutiple calls we declare compony in curly braces so that workload decrease this is a part of react  

 }
navbar(company = "Devang")


// Json always used as a format to present api's



