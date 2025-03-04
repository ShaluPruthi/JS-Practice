// WHILE DO-WHILE LOOP
// syntax ~ while (condition) {}

let i = 0
while(i <= 10){
    console.log(`value of index is : ${i}`);
    i = i+2 
}


// USING ARRAY
let myarr = ["flash", "batman", "superman"]
let arr = 0
while(arr < myarr.length){
    console.log(`value is ${myarr[arr]}`);
    arr = arr+ 1
}

//DO-WHILE
let score = 1   //if value is greater than 10 than only current value will print
do {
    console.log(`score is : ${score}`);
    score++
} while (score <= 10);