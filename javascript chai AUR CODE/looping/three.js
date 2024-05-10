const mynumber=[1,2,3,4,5,6,7,8,9]

// const newnum=mynumber.map((num)=> num+10 )

// console.log(newnum)

const newNumber=mynumber
                    .map((num)=> num*10 )
                    .map((num)=>num+1)
                    // .map((num)=>num>=40)
                    .filter((num)=>num>=40)

console.log(newNumber)
//so from we this example we have seen that we can use map in chain also ans we can also use map and filter in combination
    