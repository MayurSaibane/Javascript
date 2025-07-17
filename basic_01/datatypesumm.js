//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions
const heroes =["Iron man , Captain , batman"]
console.log(heroes);
let Mayur ={
    Surname:"Saibane", // if you do not add , after surname for next line it will show "Unexpected identifier 'Age'"
    Age:25,
    Location:"pune",
}
console.log(Mayur)
 const myFunction = function(){
    console.log("Hello world");
 };
 myFunction();