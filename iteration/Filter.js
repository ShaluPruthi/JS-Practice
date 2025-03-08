//forEach doesn't return any value

const coding = ["js", "ruby", "java", "python", "cpp"]
const val = coding.forEach( (item) => {
    console.log(item);
    
});
console.log(val);   //return undefined

const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNum.filter( (num) => num > 5)  //return the values
//OR myNum.filter((num)=> {return num>5})
console.log(newNum);    

const num= []
//callback = (() => {})
myNum.forEach( (n)=> {
    if(n > 4){
        num.push(n)
    }
})
console.log(num)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //return only History Genre
  let userBooks = books.filter((bk) => bk.genre === 'History')
  //overwrite the variable userBooks
  userBooks = books.filter((bk) =>{ 
    return bk.publish >= 1995 || bk.genre === 'History'
})
  console.log(userBooks)