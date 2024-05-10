//for of loop
//verry verry imporant

//["",""," "];
//[{},{},{}]
const myarray=[1,2,3,4,5,6]

//in for of loop we did not need to define starting and the length of array
//it is generally usrd in the array and objects


for (const i of myarray) {
    // console.log(i)
    
}

const greeting="Hello javascript"
for (const greet of greeting) {
    // console.log(`Every word is ${greet}`)
    
}

//Maps:
//it stores the unique values .
//it is same as object but it also store the sequence of entry

const map=new Map()
map.set('In', "India")
map.set('USA', "united states of america")
map.set('Fr', "France")
map.set('In', "India")
// console.log(map);

// for (const key of map) {
//     console.log(key)
    
// }
// for (const [key,value] of map) {
//     console.log(key ,':-', value)
    
// }

const myObject={
    game1:'Cricket',
    game2: 'Basketball',
    game3: 'Hockey'
}
// for (const [key,valye] of myObject) {
//     console.log(key,':-',value)
    
// }
//so as  we can see that it is not itteratble in case of objects
//so for objects we use forin loop

for (const key in myObject) {
    console.log(`${key} for the the information ${myObject[key]}`);
 
}

//use of forin loop in case of arrays

// const newArray=["js","Cpp","javascript","ruby","swift"]
// for (const key in newArray) {
//    console.log(key)
//    console.log(newArray[key]);
// }
//as we can see that it only prints the index of arrays i.e key not the value
//it is the big difference between the forof and forin


//*******************************very important loop*******************************
//**********************for each loop ******************************

const coding=["js","cpp","ruby","python","swift","java"]

//accesssing
// coding.forEach( function(value){
//     console.log(value)
// })

//another way

coding.forEach( (key,index,array)=>{
    console.log(key,index,array)
})

// another way

// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)


const mycoding=[
    {
        programming: "C++",
        languageFileName: "cpp"
    },
    {
        programming: "python",
        languageFileName: "py"
    },
    {
        programming: "javascript",
        languageFileName: "js"
    },
    {
        programming: "java",
        languageFileName: "java"
    }
]

mycoding.forEach((item)=>{
    console.log(item.programming)
})
