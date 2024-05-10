//how to check wearher a given array is empty or not

const userEmaile=[]

if(userEmaile.length===0){
    //=== is ued ti chek wheather the value and datatype is same or not while == checks only for value
    console.log("Array is empty")
}


//check wheather the given object is empty or not
const emptyObjext={}

if(Object.keys(emptyObjext).length===0){
    console.log("Object is empty")
    // here object.keys() works as array and i have used the the length to wheather the length of array is 0 or not.

}

//Nullish Coalescing Operator (??) : null undefined
//isme jo value pahele milegi whi assign ho jayegi variable me 

let val1
// val1=5 ?? 10
// val1= null ?? 10

// val1 = undefined ?? 15

val1= undefined?? 15 ??20

console.log(val1)


//terniary operator

//it is the simplest form of if else statement

// condition ? true: false


const isePrice=100
isePrice >=80 ? console.log("Pricr is greater thean 80") : console.log("Price is less than 80")

