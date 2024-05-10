const heros=["Akshay kumar","Hritik roshan", "sahid kapoor"]
const south_heros=["Rajnikant", "nitin", "vijay"]
// heros.push(south_heros);
// console.log(heros)
//As we can see here that the elements does not get inserted in the heroes array 
//but the whole array get inserted into the array named heroes.
// here the south_heroes is the single entry in the array called array.

//for accessiong the elements of the array
// console.log(heros[3][2])

const all_heroes=heros.concat(south_heros)
console.log(all_heroes)//
//amother method 

const all_new_heros=[...heros,...south_heros]
console.log(all_new_heros);


const another_array=[1,2,3,[4,5,6,[7,8,[9,10]]]]
const real_another=another_array.flat(Infinity)
console.log(real_another)


console.log(Array.isArray("Rajat"))
console.log(Array.from("Rajat"))

//conversion into array
let obj1=100;
let obj2=200;
let obj3=200;
console.log(Array.of(obj1,obj2,obj3))