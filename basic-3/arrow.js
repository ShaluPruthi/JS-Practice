//ARROW function ES6 was introduced in 2015 along with newer features in which we got arrow function
//THROW keyword refer the current context of particular scope
//Global object in browser is window object

const user={
    name:"shalu",
    price: 999,
    
    welcomeMsg: function(){
        console.log(`${this.name} , welcome to the site`)
        console.log("inside ",this)
        
    }

}

user.welcomeMsg()   //default value
user.name="Sam"
user.welcomeMsg()   //changed value

console.log("outside",this);    //doesn't contain any value return an empty object


//function one(){
//    let username= "Shalu"
//    console.log(this.username); //undefined, we can not use this keyword inside the function
//}
//one()


//const use = function(){
//    let username = "shalu"
//    console.log(this.username);   //undefined
//}
//use()


//++++++++++++ ARROW FUNCTION +++++++++++++
//syntax : () =>{}

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log("+++ ARROW FUNCTION START +++");
console.log(addTwo(4,5))


//also done with implicit return : when we use { } we need to write return but if use ( ) there is not need to write return
const add = (num1, num2) => num1 + num2
console.log(add(2,5))


//return object
const addThree = () => ({username : "shal"})
console.log(addThree());
