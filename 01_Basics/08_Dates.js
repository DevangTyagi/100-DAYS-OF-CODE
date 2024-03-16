//Dates

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toJSON());

let mycreateddate = new Date(2024,0,12,7,5)
console.log(mycreateddate.toLocaleString());

let mytimestamp =Date.now()
console.log(mytimestamp);
console.log(mycreateddate.getTime()); // Gives exact millisecond format of thethe date 

console.log(Math.floor(Date.now()/1000));  // In Second conversion

let newdate = new Date()
console.log(newdate);

newdate.toLocaleString('default',{
     weekday:"long"                 //It have a property to declare objects withn them
    }
)
