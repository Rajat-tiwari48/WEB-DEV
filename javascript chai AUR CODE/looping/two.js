// const coding=["js","cpp","ruby","python","swift","java"]


// const value= coding.forEach((item)=>{
//     // console.log(item)
//     return item


// })

// //so it means for each does not return any value

// console.log(value)

const nums=[1,2,3,4,5,6,7,8,9,10]

// const newNumber = nums.filter((item)=>item>5)
// console.log(newNumber)

//or

// const newNumber = nums.filter((item)=>{
//     return item>5
// })
// console.log(newNumber)

//accessing with for each loop

const newNumber=[]
nums.forEach((item)=>{
    if(item>5){
        newNumber.push(item)
    }
})
console.log(newNumber)