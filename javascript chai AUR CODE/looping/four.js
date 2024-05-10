const myNum=[1,2,3,4]

// const Total=myNum.reduce(function(acc,currval){
//     console.log(`Accumulator : ${acc} and current value is ${currval}` )
//     return acc+currval

// },0)
// console.log(Total)


//another way
const myTotal=myNum.reduce((acc,currVal)=> acc+currVal,0)
console.log(myTotal)

const ShoppingCart=[
    {
        itemName: "javascript",
        Price: 2999
    },
    {
        itemName: "full Stack Development",
        Price: 5999
    },
    {
        itemName: "Data Science",
        Price: 6999
    },
    {
        itemName: "Machine Learning",
        Price: 7999

    }

]
const CartPrice=ShoppingCart.reduce((acc,item)=>acc+item.Price,0)
console.log(CartPrice)
