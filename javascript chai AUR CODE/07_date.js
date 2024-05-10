let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())


let createMyDate = new Date("10-01-2021")
console.log(createMyDate)

let myTimeSpam= Date.now()

//it gives milisecond till now
console.log(myTimeSpam)
console.log(createMyDate.getTime())
console.log(createMyDate.getTime())

//in second value
console.log(Math.floor(Date.now()/1000))