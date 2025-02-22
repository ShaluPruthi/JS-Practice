//OBJECTS

//singleton : constructors always create singleton but literals not

//object literals
//create object, objects have key:value pair

//interview question:
//declare symbol
const sys = Symbol("key1")

const JsUser = {
    name : "Shalu",
    [sys] : "Symbol Access", //use the symbol inside []
    age : 20,
    location : "jaipur",
    email: "sss@gmail.com",
    isLoggedIn : false,
    LastLogin: ["Monday", "Saturday"]
}
// through constructor method = Object.create

//access the object console.log(JsUser.email)/(JsUser["email"])
console.log(JsUser.name);
console.log(JsUser["name"]);
//run symbol
console.log(JsUser[sys]);

//change the value or override the value
JsUser.email="ss22@gmail.com"

//freeze the object and change doesn't occur
// Object.freeze(JsUser)

JsUser.name = "Shal"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
    
}
console.log(JsUser.greeting());


JsUser.greeting2 = function(){
    console.log(`Hello JS User,My Name Is ${this.name} and my Age is ${this.age}`); //refer the same object
    
}
console.log(JsUser.greeting2());
