{} // is scope only with function 

let a = 300 //global scope can access anywhere

if(true){
    let a = 10;     //local scope can access only inside these curly braces
    const b = 20;
    console.log("INNER: ", a);
}

console.log(a);


//NESTED FUNCTIONS : only child can access parent functionality
function one(){

    const name="Shalu"

    function two(){
        const site = "GitHub"
        console.log(name);
    }
    // console.log(site);  //return error because site is present inside the two()

    two()
}

one()

//IF-ELSE
if(true){
    const name="Shalu"

    if(name== "Shalu"){
        const site= "GitHub"
        console.log(name + site )
    }

    // console.log(site)
}

// console.log(name)

//+++++++++++