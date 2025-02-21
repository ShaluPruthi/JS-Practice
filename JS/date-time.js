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

let cd = new Date("2023-01-14") //YY-MM-DD
let c = new Date("01-14-2023")
console.log(cd.toLocaleString());
console.log(c.toLocaleString());

//++++++++++++ TIME ++++++++++++
//using time stamp: use to check exact time stamp
let MyTimeStamp = Date.now() //give milli second values
console.log(MyTimeStamp);
console.log(c.getTime()); //give mili second values from 1st jan till the mentioned date

//convert mili seconds into seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getHours());
console.log(newDate.getMonth());
console.log(newDate.getMilliseconds()); //miliseconds of particular date
console.log(newDate.getUTCDate()); //date
console.log(newDate.getDate()); //only date
console.log(newDate.getFullYear()); //only year

// `${newDate.getHours()} and the time is ${newDate.getTime()}`

//customize the format
newDate.toLocaleString('default',{
    weekday: "narrow",
    timeZone: " "
})
