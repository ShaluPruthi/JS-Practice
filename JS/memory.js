//two types of memory: Stack(Primitive) , Heap(Non-Primitive)
//Heap is a big container and stack has different containers for each value

let myName="shal"
let anotherName = myName

anotherName = "shalu"

console.log(myName);
console.log(anotherName);

let userOne = { //store in heap 
    email : "shal@gmail.com",
    upi: "user@ybl"
}

console.log(userOne.email);

let user2 = userOne
//access through objects:

user2.email = "user@google.com"

console.log(userOne.email);
console.log(user2.email);

