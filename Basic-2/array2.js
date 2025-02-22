//ARRAY
const heros=["thor","iron man","spiderman"]
const dc =["superman", "flash", "batman"]

// heros.push(dc)
// console.log(heros); //return array inside array

// heros.concat(dc)
// console.log(heros); //same like push

const c = heros.concat(dc);
console.log(c); //combination of both arrays and return new array

//THEN Y SPREAD OPERATOR IS PREFERED bcz we can add multiple variables inside spread

//SPREAD OPERATOR works similar to the concat
const all = [...heros, ...dc]
console.log(all);

const another = [1,2,3, [ 4,5,6], 7, [6,7,[4,5]]]
const useable_another = another.flat(Infinity) //convert the above array inside one array
console.log(useable_another);

console.log( Array.isArray("hii")) //ask if this is an array or not , return T/F
console.log(Array.from("hii")); //convert into array
console.log(Array.from({name : "hii"}));

//convert multiple variables into single array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));




