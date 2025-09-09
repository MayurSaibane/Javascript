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
let Game1='     MAyur  aa  ssss    ';
console.log(Game1.trim()); // Remove spaces from start and end but not touch space inside string
// to remove space from every where use
console.log(Game1.replace(/\s+/g, ''));   // "MAyuraassss"
let URL='MayurSaibane.com/Mayursaibane%20'
console.log(URL.replace('%','--'));
console.log(URL.includes('Mayur')); // case sensitive see for small m its flase
let Game3='Mayur----saibane \\ Be'
console.log(Game3.split('-',)); // splits and create array
console.log(Game3.split('\\',));

// if both in one print then)
console.log(Game3.split(/[-\\]/));
 /*Extra notes on string
 /s=replace number, /d replace digit /g global  /Sreplaces everything except spaces \D → replaces everything except digits
 .search let str = "abc123xyz";
console.log(str.search(/\d+/)); // 3 (position of first number)
.match let str = "abc123xyz456";
console.log(str.match(/\d+/));   // ["123"] (first match only)
console.log(str.match(/\d+/g));  // ["123", "456"] (all matches with "g" flag)
#comparison (a<b)True b comes before a (a>A)a=97 A=67 str1.localeCompare(str2, [locales], [options])
-1 → str1 comes before str2
0 → equal 1 → str1 comes after str2
##padding -Padding means adding extra characters to the start or end of a string until it reaches a desired length.
Useful for things like:
padStart(targetLength, padString)
let num = "7";
console.log(num.padStart(3, "0")); // "007"
(b) padEnd(targetLength, padString)
 let str = "Hi";
console.log(str.padEnd(5, "!")); // "Hi!!!"
ex
let name = "Mayur";
let score = "95";
console.log(name.padEnd(10, " ") + score.padStart(3, " "));
// "Mayur     95"
Notes
If the string is already longer than targetLength, nothing changes
console.log("hello".padStart(3, "*")); // "hello" (unchanged)

 Default Behavior (if padString not given)
console.log("5".padStart(3)); // "  5" (pads with spaces by default)
console.log("5".padEnd(3));   // "5  " 

notes for string =mayur
console.log(str.substring(3)); // "ur"
let str = "Mayur";

console.log(str.slice(0, 3)); // "May"
console.log(str.slice(3));    // "ur"
console.log(str.slice(-2));   // "ur" (last 2 chars)

 
 
 
 
 
 
 
 */
