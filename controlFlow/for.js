// iterations syntax ~

// for(let i= 0(initialize); i < array.length(condition); i++ (updation)){

// }

for (let i=0; i <= 10; i++){
    const element = i;  //can't access outside this scope
    if(element == 5){
        console.log("5 is best number");
    }
    else{
        console.log(element);
        
    }
}


//NESTED LOOP
for(let x=0; x<=3; x++){
    console.log(`outer loop value: ${x}`);
    
    for(let y=0; y<= 10; y++){
        // console.log(`inner loop: ${y} and outer loop: ${x}`);  //print from 0 to 10

        console.log( x + '*' + y + '=' + x*y);  //print tables
        
        
    }
}


//FOR LOOP USING ARRAY
let myarray= ["flash", "batman", "superman"]
console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}

// KEYWORDS to stop the loop ~ BREAK and CONTINUE
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        break    //outside the loop after 5
    }
    console.log(`value of index is : ${index}`); 
}

for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        continue        //skip 5
    }
    console.log(`value of index is : ${index}`); 
}