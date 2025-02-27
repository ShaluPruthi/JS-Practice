//assume that string have true value is called truthy

const userEmail = "sh@lu.ai"

if(userEmail){
    console.log("got user email");
    
} else{
    console.log("don't have");
    
}

// falsy values
//false , 0 , -0 , BigInt: 0n, "" , null , undefined , NaN


//truthy values ~ except from falsy values are truthy values
// "0" , "false" , " " , []empty array , {}empty object , function(){}
//false == 0; false == "" ; 0 == ""


const user = [ ]
if(user.length === 0){
    console.log("Array is empty");
    
}

const empyObj = {}

if (Object.keys(empyObj).length === 0){
    console.log("Object is Empty");
    
}


// Nullish Coalescing Operator (??) : null undefined, check null safety

let val1;
val1 = 5 ?? 10
console.log(val1);  //5

val2 = null ?? 10
console.log(val2);  //10

val3 = undefined ?? 15
console.log(val3);  //15

val4 = null ?? 10 ?? 17
console.log(val4);


//ternary Operator ? work similar to if-else
// syntax ~ condition ? true : false
const teaPrice = 100
teaPrice <=80 ? console.log("less than 80") : console.log("more than 80");
