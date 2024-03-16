//Arrays

const myarr = [0,1,2,3,4]
const myheroes= ["Ironman","Captain america","Hulk"]
const myarrr2 = new Array(9,8,7,6) // parenthesis are used in pplace of karge baces in declationof new array method

console.log(myarr[0]);

// Array methods

myarr.push(6)
console.log(myarr);
myarr.pop();
console.log(myarr.includes(6));

const newarr = myarr.join()
console.log(myarr);
console.log(newarr);  // join operation two arrays and convert them into string


//Special methods-Slice ,splice

console.log("A",myarr);

const myn1=myarr.slice(1,3)
console.log(myn1);      // slice is used to cut of a part of array but original array is unaffected in whole process
console.log("B",myarr);


const myn2= myarr.splice(1,3)
console.log(myn2);       // Splice shared two funtionality the first is that it cuts of the array elements from the original array and hence the original array now only contain remaining elements
console.log("C",myarr);  //  Second is that it also include the last index provided in piece out array nut slice don't contain last index
                        




