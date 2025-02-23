//when you don't know how many arguments we can get

//use REST operator will contain as much as values into one array
//REST and SPREAD operator is declare with ...
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400));


function cal(val1 , val2 , ...num){
    return num
}
console.log(cal(100,200,3000,400)); //store last two values in num and others in val1,val2

//pass object into function
const user = {
    name: "shalu",
    price: 199
}

function handleObject(anyobject){
    console.log(`User Name is ${anyobject.name} and price is ${anyobject.price}`);
    
}
handleObject(user)

//pass direct object
handleObject({
    name: "sam",
    price:399
})


//pass arrays into function
const myArray = [200, 400, 500, 600];

function handleArray(anyArray){
    return anyArray[2]
}
console.log(handleArray(myArray));
