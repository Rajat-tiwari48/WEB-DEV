//stack(it is used at the primitive data types) and heap (it is used at the non primitive data type )memory allocation
//example of stack allocation
let nameOne="Rajat";
let nameTwo=nameOne
console.log(nameOne);
console.log(nameTwo)
nameTwo="Aman"
console.log(nameOne);
console.log(nameTwo)


// Example of heap allocation: here address is passed not the copy is created.
let userOne={
    email:"rajat@google.com",
    upi:"xyz@ybl"


}
console.log(userOne.email)
let userTwo=userOne
userTwo.email="aman@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)