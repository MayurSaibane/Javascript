let myDate= new Date(); // typeof =object
console.log(myDate.toString());
 console.log(myDate.toDateString());// Gives day month  date year
 console.log(myDate.toLocaleDateString());//gives  mm/dd/YYYY
 console.log(myDate.toLocaleString());//gives mm/dd/yyyy and current time 
 console.log(myDate.toLocaleTimeString());// gives time only in hr:min:sec
console.log(myDate.toISOString()); //gives yyyy/mm/dd  It always gives UTC time, not your local timezone.
   let myCreatedDate=new Date(2025 ,8 , 5 , 12, 24  );
console.log(myCreatedDate.toDateString()); // give week day month date year and when we give month in single it take starting zero and if two digit then starting one 
console.log(myCreatedDate.toLocaleString());// gives only date in mm/dd/yyyy
console.log(myCreatedDate.toLocaleDateString());// gives only date mm/dd/yyyy
let newDate= Date.now();
console.log(myCreatedDate.getTime()); // gives time time from 1 jan 1970 in ms
console.log(Math.floor(Date.now()/1000));// gives time stamp in seconds
let newdate = new Date();
console.log(newdate.getMonth()+1);//+1 because it gives month starting with zero
console.log(newdate.getDay());
console.log(newdate.toLocaleString('default', {
    weekday:"long",

}))
