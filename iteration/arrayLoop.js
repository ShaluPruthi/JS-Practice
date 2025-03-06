// implement loop on array used for database

//FOR-OF loop
//["", "", ""]      [{}, {}, {}]

const arr = [1,2,3,4,5,6]
for (const num of arr) {
    console.log(num);  
}

//print each alphabet individually in new line
const greetings= "hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}

//MAPS unique values and stored in mentioned order doesn't contain duplicate values
const map = new Map()
map.set('IN' , "India")
map.set('FR' , "France")
map.set('UK' , "United Kingdom")
console.log(map);

for (const [key, value] of map) {
    console.log(key, '~', value);
}

//for of doesn't work
const myObj = {
    'subject': 'Computer',
    'subject1': 'Fundamentals'
}
