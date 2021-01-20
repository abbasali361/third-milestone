// const year = 3998;
// const year = 3996;
// let remainder = year % 4;
// if (remainder==0){
//     console.log('Your year is a leap Year');
// }
// else{
//     console.log('Your year is not a leap Year');
// }

function isYear(year){
   
let remainder = year % 4;
if (remainder==0){
    return true;
}
else{
   return false;
}
}
const check2000=isYear(2000);
console.log(check2000);