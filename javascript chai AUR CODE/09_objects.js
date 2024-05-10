

// const sym = symbol("key")
//object literals
const myProfile={
    name:"Rajat",
    // [sym]:"key",
    "full name": "Rajat tiwari",
    age:20,
    location:"sonbhadra",
    email:"Rajat@gmail.com",
    isLoggedis:false,
    lastLogedin:["monday","saturday"]

}

//accessing the properties of myProfile
console.log(myProfile.location);
// //Not possible
// console.log(myProfile.full name)
//2nd method
console.log(myProfile["location"])
console.log(myProfile["full name"])


//acessing symbol
// console.log(myProfile[sym])
console.log(myProfile.email);


//email at the profile get changed
myProfile.email="rajat@google.com"
console.log(myProfile["email"])

//we can also freeze the object so that values could not be changed
// Object.freeze(myProfile)
myProfile.email="rajat@amazon.com"
console.log(myProfile["email"])


//ADDING fuction to the object
myProfile.greeting=function(){
    console.log("hello welcome to my profile")
}

myProfile.greetingTwo=function(){
    console.log(`hello welcome to mr.${this.name}'s profile`)
}

console.log(myProfile.greeting())

console.log(myProfile.greetingTwo())
