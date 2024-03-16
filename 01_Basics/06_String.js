const name = "Devang";
const repocount = "5";
console.log(
  `The NAME of Developer is ${name} and Number of repositories is ${repocount}`
);

const gamename = new String("Devang-ty");

console.log(gamename[4]);
console.log(gamename.length);

console.log(gamename.toUpperCase());
console.log(gamename);

//Original value does not change incase of string because string is a primitive datatype
//which works on stack data memory management

//Some inbuilt functions of the string
console.log(gamename.charAt(4));
console.log(gamename.indexOf("n"));

//Making of Substring from a given string (starting is always positive)
const newstring = gamename.substring(0, 3);
console.log(newstring);

//Slice from a particular to a particular index
const stringone = gamename.slice(-5, 3);
console.log(stringone);

//Trim in String
const newstringone = "   devang tyagi   ";
console.log(newstringone);
console.log(newstringone.trim());

//Replace in String
const url = "https://hitesh.com/devang%20tyagi";
console.log(url.replace("%20", "-"));
