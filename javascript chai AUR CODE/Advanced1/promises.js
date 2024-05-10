const promiseOne=new Promise(function(resolve,reject){
    //Do an async Task
    //DB call, Cryptography, network
    setTimeout(function(){
        console.log("Async Task is completed")
        resolve()

    },1000);
})

//resolve is connected to then that's why when the function is executed then then only the promiseone is executed.
promiseOne.then(function(){
    console.log("Promise Consumed")
})

// Another method

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
    resolve()

    },1000)
    
}).then(function(){
    console.log("Promise 2 consumed")
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Rajat", email:"Raj@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)

})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"Rajat", password:"12345"})
        }
        else{
            reject('error: Something Went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})

//yha upper hmne 2 bar then() use kia h iska mtlb h pahele wale then() m jo return hoga wo direct 
//dusre wale then m aa jayega jo ki hmne print karwaya h
//jese ki hmne return karwaya h user.username isme return user name hua h jo ki hmne print krwaya h 
//dusre wale then m
// aur catch () function use hota hreject ke case m
//jb error  ki value true hogi tb catch wala statement print hoga wrna then wala print hoga kyuki wo 
//resolve lo show krta h 
//finally() it will always execute weather the promise is resolved or rejected


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"javascript", password:"1234"})
        }
        else{
            reject('error:something wenrt wrong')
        }
    },1000)
})

//another method to handel promise
// in this we did not use then() or catch()
//in this the promise will untill it will get execute 


async function consumePromiseFive(){
    try {
        const responce=await promiseFive
        console.log(responce)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


// async function getAllUser()
// {
//     try {
//         const responce=await fetch('https://jsonplaceholder.typicode.com/users')

//         //to convert the string into object we use json()
//         const data=await responce.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(responce){
     return responce.json();
}).then((data)=>{
    console.log(data)
})
.catch(function(error){
    console.log(error)
})