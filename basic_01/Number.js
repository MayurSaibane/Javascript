const score=400;
// console.log(typeof score);

const Balance=new Number(100.00404);
// console.log(typeof Balance);
console.log( Balance); // print output as Number :100
console.log(Balance.toString().length)//  it converts to string by these method and get additional properties of it 
console.log(Balance.toFixed(3));// gives number after decimal 

const otherNumber=1123.446
console.log(otherNumber.toPrecision(3));

const Hundred=1000000;
console.log(Hundred.toLocaleString('en-IN'));// en-IN for indian number counting
