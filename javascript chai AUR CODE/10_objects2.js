
// single ton
//or declaring object with the help of constructor
// const facebook=new Object()
const facebook={}
facebook.id="Rajat@facebook.com"
facebook.name="Rajat"
facebook.age=20
facebook.loggedIn=false

console.log(facebook.name)
console.log(facebook);


//object ke ander object

const regular={
    email:"rajat@google.com",
    fullNmae:{
        userfullName:{
            firstName:"Rajat",
            lastName:"Tiwari"
        }
    }
}
//accessing
console.log(regular.fullNmae.userfullName.firstName);

//merging two objects
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3=Object.assign({},obj1,obj2)
console.log(obj3);

const obj4={...obj1,...obj2}
console.log(obj4);


console.log(facebook)
console.log(Object.keys(facebook))
console.log(Object.values(facebook));
console.log(Object.entries(facebook));


console.log(facebook.hasOwnProperty('loggedIn'))
