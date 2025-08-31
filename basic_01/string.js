let Name='Mayur'; //This is a string primitive (a basic data type in JavaScript).
//Even though it’s primitive, JS automatically gives it access to string methods (.toUpperCase(), .length, etc.) 
// using something called autoboxing (JS temporarily wraps it in a String object when needed).
let age=24;

console.log(`The name of the memeber is ${Name} and age group is ${age}`)
// Backstiks or string interpolation  it create place holders where varibale is directlyinjected init
 // string declaration new method
 let Gamename=new String('Mayurrrrs'); //This creates a String object, not a primitive string.
 //console.log(typeof gameName);  // "object" (not "string"!)
/*let str1 = "hello";
let str2 = new String("hello");
console.log(str1 == str2);  // true  (loose comparison, values are same)
console.log(str1 === str2); // false (strict comparison, different types: primitive vs object) */
console.log(Gamename[0]); // we can use same method for let Name='Mayur'; string too
console.log(Gamename.length);
console.log(Gamename.toUpperCase);
console.log(Gamename.charAt(3));
console.log(Gamename.indexOf('s') );
console.log(Gamename.substring(0,4));// you can declare a new variable to ex: let name2=Gamename.substring(0,4) and print
// substring do  not have negative number
console.log(Gamename.slice(-8,4))
let Game1='     MAyur    aa ssss    ';
console.log(Game1.trim()); // Remove spaces from start and end but not touch space inside string
// to remove space from every where use


