const myNum = [1,2,3,4,5,6,7,8,9,10]

//map return automatically
const newNum =myNum.map( (num) => num + 10)
console.log(newNum);

const nn= []
//callback = (() => {})
myNum.forEach( (n)=> {

    nn.push(n+20)

})
console.log(nn)

//chaining method
const newnums = myNum
        .map((num) => num*10)
        .map((num) => num+1) //initial value of first map method where numbers *10
        .filter((num) => num >= 40)

console.log(newnums);
