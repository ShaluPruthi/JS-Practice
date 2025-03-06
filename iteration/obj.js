const myObj = {
    js:'javascript',
    cpp: 'c++',
    rb:'ruby',
    swift:'swift by apple'
}

//forin loop
for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const arr = ["js", 'ruby','python','cpp', 'java']
for (const key in arr) {
    console.log(key);   //print index values
    console.log(arr[key]);
}

//forin loop doesn't work on map bcz it is non iterable
// const map = new Map()
// map.set('IN' , "India")
// map.set('FR' , "France")
// map.set('UK' , "United Kingdom")
// for (const key in map) {
//     console.log(key);
// }
  