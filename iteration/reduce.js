// reduce method is used to 
//  reduce ( (accumulator , currentValue) => accummulator + currentValue , initialValue);
//  accumulator contains the initialValue at first and after that it contains the result

const array1 = [1,2,3,4]
const initialValue = 0;
const sumInitial = array1.reduce(
    (accumulator , currentValue) => accumulator + currentValue , 
    initialValue
)
console.log(sumInitial)
// Process ~ 0+1=1, 1+2=3, 3+3=6, 6+4=10

const shoppingCart = [
    {
        item:' js course',
        price: 2999
    },
    {
        item:' python',
        price: 4999
    },
    {
        item:' DSA',
        price: 3999
    },
    {
        item:' DBMS',
        price: 999
    },
]

const total = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(total);
