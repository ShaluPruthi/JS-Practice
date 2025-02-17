// basic string  "hello" + "world" but in program we need to write it as

const name = "shalu "
const repo = 50

// console.log(name + repo + " value");not use it in modern time so we wrote it using backtick ``

//use backtiks`` because of string interpolation and also we can directly use the methods
console.log(`Hello my name is ${name} and my repo count is ${repo} `); 

//2nd method of declaring string using new keyword string as object 'key:value'
const game = new String("Hello-world")

console.log(game[1]); //access key:value
console.log(game.__proto__); //access prototype and get the empty object

//String methods
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.charAt(7)); //check the character at 2 index value
console.log(game.indexOf("w"));//index value of character

console.log(game.substring(0, 4)); //0 is the index value and 4 is the number of characters we want
console.log(game.slice(-4))

const newS = String("   Hello    ")
console.log(newS);
console.log(newS.trimEnd());
console.log(newS.trimStart());
console.log(newS.trim());

const url = "https://w3school.com/JavaScript%20String"
console.log(url.replace('%20', "-"))
console.log(url.includes("w3school"))

//convert string into array or split basis on "-"
console.log(game.split('-'));
