const score = 400
console.log(score);

//define with new keyword
const balance = new Number(200)
console.log(balance);

//methods
console.log(balance.toString(), typeof(balance)); //convert into string
console.log(balance.toFixed(2)); //it gives the decimals after value i.e 200.00


const otherN = 23.89537
console.log(otherN.toPrecision(3)); //gives round off value with given numbers range btw 1 and 21,returns string
const ss =123.532
console.log(ss.toPrecision(3));

//to make easy representation
const hund = 10000000
console.log(hund.toLocaleString());
console.log(hund.toLocaleString('en-IN'))

//Number.MIN_VALUE, .MAX_VALUE, .MAX_SAFE_INTEGER, EPSILON, IsFinite.....etc

//+++++++++MATHS++++++++++
//have default values of some methods
console.log("++++++++MATHS++++++++");

console.log(Math);
console.log(Math.abs(6));
console.log(Math.abs(-4)); //convert -ve and +ve
console.log(Math.round(4.6)); //4.5 => 4 less than .5 => 4 & higher than .6 =>5
console.log(Math.ceil(4.5)); //it will choose upper value i.e 5
console.log(Math.floor(4.9)); //lower value i.e 4
console.log(Math.sqrt(47));
console.log(Math.min(1,4,6,8,9,0));
console.log(Math.max(1,5,8,3,9,0));

console.log(Math.random()); //lies btw 0 to 1
console.log((Math.random()*6) + 1); //min value 1 , lies between 1 and 6
console.log(Math.floor(Math.random()*6) + 1);

const min = 10
const max = 20

//max - min give range and + 1 to avoid 0 and + min to get minimum value
console.log(Math.floor(Math.random() * (max - min + 1)) + min)