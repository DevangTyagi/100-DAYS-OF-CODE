//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

//Primitive datatypes
//7 datatypes : string,number,boolean,null,undefined,symbol,bigint


const id=Symbol('234');
const anotherid=('234');

console.log(id===anotherid);

//Reference or Non primitive datatypes

//Arrays.objects,Functions

const Heroes = ["Ironman","Captain America","Thor"]
console.log(Heroes)

let myobj={
    name:"Devang",
    age:21,
}
console.log(myobj)

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof myfunction);

console.table([typeof Heroes,typeof myobj,typeof  myfunction])


// ************* MEMORY in Javascript *************

//Stack(Primitives) Heap(Refernce or non primitives)

let myname="Devang"

let vname = myname
vname = "Harsh"

console.log(myname)
console.log(vname)

//In Stack a copy of original data is given to new varibles and if we manipulate the data the changes reflects only on copied sata not on the original value

let uone ={
    email:"user@gmail.com",
    upi:"user@ybl",
}

let utwo = uone
 
utwo.email="resu@gmail.com"

console.log(uone.email)
console.log(utwo.email)

// In case of Heap reference iss given two all the referencing variables and hence manipulation on any data directly affects the original data
