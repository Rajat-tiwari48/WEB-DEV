const user={
    username: "Rajat",
    price: 999,
    WelcomeMessage: function(){
        console.log(`${this.username}, Welcome to website.`)
        //here this keyword is used to reference of current contest
        //mtlb same object ke ander ki value ko access krne ke liye hm use karege this keyword.

        console.log(this)
        //from this we can see that this is pointing to current object
    }
}

user.WelcomeMessage()

//cahnging the username
user.username="Ram"
user.WelcomeMessage()

console.log(this)
//yha pr empty object ayega kyuki ye wala this kisi object ke ander nhi h isliye ye empty object ko point karega
//pr agar hm browser ke ander check krte h to ye ek window deta h


//we cannot use this in function
//eg

function cahi(){
    let username= "Rajat"
    console.log(this)
    console.log(this.username)
    
}
cahi()


//we use arrow function to use this keyword

const cahi1=() => {
    let username = "Rajat Tiwari"
    console.log(this.username)

    console.log()
}
cahi1()


//Arrow function

// const addTwo= (num1,num2)=>{
//     return num1+num2

// }

//Another way i.e Implecit return
const addTwo= (num1,num2)=> (num1+num2)

console.log(addTwo(2,4))



