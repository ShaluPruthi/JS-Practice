//ARRAY
const heros=["thor","iron man","spiderman"]
const dc =["superman", "flash", "batman"]

heros.push(dc)
console.log(heros); //return array inside array

heros.concat(dc)
console.log(heros); //same like push

const c = heros.concat(dc);
console.log(c); //combination of both arrays and return new array

//spread operator