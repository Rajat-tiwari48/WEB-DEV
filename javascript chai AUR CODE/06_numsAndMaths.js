const score=400
// console.log(score)

//another way to initilize a number
const balance=new Number(100)
// console.log(balance)

// console.log(balance.toString().length)

//through this we can fix the decimal places
// console.log(balance.toFixed(2))

const otherNumber=1234.987
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));
//so from this we can see that the precision works with starting with the number
// console.log(otherNumber.toPrecision(5));

const hundred=100000
//through this we can convert the hundred in the indian no. system
//but default value is in million
// console.log(hundred.toLocaleString('en-IN'))

//+++++++++++++++++++++++++ Maths +++++++++++++++++

console.log(Math)
console.log(Math.abs(-6))
console.log(Math.round(6.7))
console.log(Math.floor(6.9))
console.log(Math.max(2,4,5,1,5,6))
console.log(Math.min(2,4,5,1,5,6))

//it will give a value range in 0-1
console.log(Math.random())
//so to increase the range

console.log(Math.random()*10)

const min=10;
const max=20

//formula to get the no. in the range of min and max

console.log(Math.floor(Math.random()*(max-min+1)) +min)




