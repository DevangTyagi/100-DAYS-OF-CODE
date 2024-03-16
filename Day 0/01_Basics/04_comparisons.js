// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2!=1);

console.log(null>0); //false
console.log(null>=0);//false
console.log(null>=0);//true

//The Reason is that == and comparisons operators work differently.
//Comparisons convert null to a number treating it as zero but check == don't

console.log(undefined ==0);
console.log(undefined>0);
console.log(undefined>=0);

//=== is to check strictly about thr values as well as the data types

console.log("2"===2);

//Gives false because strings and number are different data types

