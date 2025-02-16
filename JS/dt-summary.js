//categorization of data depends on the memory that how the data stored or function in memory

// 1. Primitive Data Type and call by value:
// 7 types: String, Number, Boolean, null(empty), undefined, Symbol, BigInt.

//JS is dynamic language there is no need to define the data type of variable

const score =100
const scoreVal = 100.3

const isLog = false
const out= null
let userEmail;

//Symbol

const id = Symbol('123')
const aid = Symbol('123')
console.log(id === aid);

//bigInt  represent with n at the end of number

const bigNumber = 429085233333333620981020n


// 2. Non-Primitive and call by reference: return type is always object
// Array, Objects(imp.), Functions
//array
const hero = ["shaktiman", "naagarj", "doga"]
//object occur inside the {} and represent in key:value pair
{
    name: "shalu"
    age: 12
}

//function declare with function keyword
function value(){
    console.log("Hello World");
}
console.log(typeof value);//function
console.log(typeof hero) //object
// call by value: get the copy of the original data not the original and changes occur in copied data.
// call by reference: allocation of memory of original data.