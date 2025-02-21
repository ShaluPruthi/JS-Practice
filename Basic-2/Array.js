//array is an object where we can store multiple elements in single. these can be resizable and mix
//they do not access using arbitary strings

//declaration 
const Arr = new Array(1, 2, 3 ,4 ,5)
//OR
const my= [0, 1, 2, 3, 4, 5] // here 0,1,2,3,4,5 are elements
console.log(my[0]);

//Shallow copies the same reference and deep copy do not share same reference

const hero = ["shaktiman", "naagarjun"]


//Array methods
my.push(10) //add at end
console.log(my);
my.pop() //remove from end
console.log(my);
my.unshift(9) //insert element in front
console.log(my);
console.log(my.shift()) //remove from front

console.log(my.includes(3)); //true and false
console.log(my.indexOf(4)); //index value of element

const newArr = my.join() //Join convert it into string
console.log(my);
console.log(newArr);

//slice, splice
console.log("A  ", my);

const Myn = my.slice(1 , 3) //slice will the section of an array from index value i.e 1 and 2
console.log(Myn);
console.log("B",my);

const myn2 = my.splice(1,3) //splice will remove the mentioned portion from original array
console.log("C",my);
console.log(myn2)
