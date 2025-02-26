# JS-Practice
A code repo for practice

**#JavaScript Execution context**
i) Global Execution Context is allocate in THIS keyword
ii) Function Execution Context
iii) Eval Execution Context used in Mongoos  (global)

example:
let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
  let total = num1 + num2
  return total;
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)


Execution of code: _there are two phases_ 
1) Memory Creation Phase ~ Memory Allocation but no execution
i.e val1 = undefined; val2 = undefined; addNum=defination; result1 = undefined; result2 = undefined

2)Execution Phase ~ Execute the functionality. When we get the function, these phases will execute every time. In above code we have addNum function which execute both the phases.
i.e val1 = 10; val2 = 5; addNum = **[new var env. + execution thread]** 

  execution of addNum function: memory phase~ val1 = undef; val2 = undef; total = undef;
    execution context~ num1 = 10; num2 = 5; total = 15

    
