//forEach doesn't return any value

const coding = ["js", "ruby", "java", "python", "cpp"]
const val = coding.forEach( (item) => {
    console.log(item);
    
});
console.log(val);   //return undefined

const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNum.filter( (num) => num > 5)  //return the values
console.log(newNum);    
