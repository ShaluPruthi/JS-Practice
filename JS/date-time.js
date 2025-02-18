//Dates

//Temporal makes API a global object and months started from 0 in js
//get current date 
let myD = new Date()
console.log(myD);

//convert to string
console.log(myD.toString());
console.log(myD.toDateString());
console.log(myD.toLocaleString());
console.log(myD.getDate());
console.log(typeof myD);

//declare specific date
let myV = new Date(2023, 0, 23)
console.log(myV.toDateString());

let myC = new Date(2023, 0, 23, 5, 3)
console.log(myC.toLocaleString())
