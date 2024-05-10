 function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("T");
 }
 sayMyName()


 function AddNumber(number1,number2){
   return number1+number2
 }
 console.log(AddNumber(5,6))

 //if the no. of arguments to ne passed is not fixed then we use ... rest operator.

 function calculateCartPrice(...num){
   return num

 }

 console.log(calculateCartPrice(400,200,800,600))

 function calculateCartPrice(val1,val2,...num){
   return num

 }

 console.log(calculateCartPrice(400,200,800,600))


 //accessing object in the function

 const user={
   username:"Rajat",
   price:999
 }
 function handelobject(anyobject)
 {console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

 }
 handelobject(user)
 // you can also pass values instaed of object
 handelobject({
   username: "Rajat",
   price: 999

 })

 // accessing the arrays to the function
 const mynewarray=[50,20,30,.40]

 function returnSecondValue(getArray){
   return getArray[1]
 }

 console.log(returnSecondValue(mynewarray))

 //or

 console.log(returnSecondValue([200,300,400,500]))