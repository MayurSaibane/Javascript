console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
/*
the  reason is that an equality check ==== and comparisons < > <=  >= works differently
conversions converts null to number ,treating it as zero
thats why (3) null>0  is true and (1) null >0 is false 
*/