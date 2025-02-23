
//declare
function sayMyName(){

    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
    console.log("U");

}

//reference
sayMyName

//execution
sayMyName()

function ADD(num1, num2) //num1,num2 are parameters
{
    console.log(num1 + num2)
}

ADD(2,4) //2,4 is arguments

function addtwo(num4, num5) //num1,num2 are parameters
{
    // let result = num4+num5
    // return result

    //OR
    
    return num4 + num5
}

const result = addtwo(3,5)
console.log("Result : ", result);

//ways to get the values in arguments and parameters:

function loginMsg(username){
    if(username === undefined){
        console.log("Enter UserName");
        return  //if this return will execute than no other code will run
    }
    return `${username} just logged in`
}

console.log(loginMsg("Shalu"))
console.log(loginMsg()) //return undefined


function loginMessage(userName){
    if(!userName){  // ! is undefined, empty string and undefined treated as false values
        console.log("Enter UserName");
        return  //if this return will execute than no other code will run
    }
    return `${userName} just logged in`
}

console.log(loginMessage("SSS"))
