let myDate= new Date(); // typeof =object
// console.log(myDate.toString());
// console.log(myDate.toDateString());// Gives day month  date year
// console.log(myDate.toLocaleDateString());//gives  mm/dd/YYYY
// console.log(myDate.toLocaleString());
console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
