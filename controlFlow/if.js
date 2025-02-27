//syntax
// if(true_condition){
//     //scope
// }

//var has completely global scope;; use either let or const
//comparison operator ~ <, >, <=, >=, ==(check if equal or not), !=, (= to assign), === data type and value

if(2 == "2" ){
    console.log("executed")
}

if(2 === "2"){
    console.log("2 executed")
}

//if-else
const temp = 41
if(temp < 50){
    console.log("less than 50");
    
}else{
console.log("temp greater");
}

const score= 200
if(score > 100){
    const power = "fly";
    console.log(`User Power: ${power}`);
}

const bal= 1000
// if(bal > 500) console.log("Test");


// ELSE-IF
if(bal < 500){
    console.log("less than 500");
    
}else if(bal < 750){
    console.log("less than 750");
    
}else if(bal < 900){
    console.log("less than 900");

}else console.log("less than 1200");
    

const userLoggedIn =true
const debit= true
const LoggedForm = false
const  email = true

// AND && (both true)
if(userLoggedIn && debit){
    console.log("allow shopping");
}

// OR || to test multiple conditions
if(LoggedForm || email  || userLoggedIn){
    console.log("User Logged In");
}