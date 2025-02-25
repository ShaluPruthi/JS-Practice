//Immediately Invoked Function Expressions (IIFE)

(function ch(){
    //name IIFE
    console.log("DB Connected");
    
})();

// () () 1st: function definition 2nd: execution 
//to remove pollution of global scope we use () ()
//to execute the other function we need to end the previous one ;

//ARROW FUNCTION
( () => {
    console.log("2nd DB Connected");
}) ();


//pass variable
( (name) => {
    console.log(`my name is : ${name}`);
    
})("shalu")