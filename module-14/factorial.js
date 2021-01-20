/*forloop*/

// // 10! = 1*2*3*4*5*6*7*8*9*10
// var factorial = 1;
// for (var i =1; i <= 10; i++){
//     factorial= factorial*i;
//     console.log(i, factorial)
// }


// function factorial(n){
//     var factorial = 1;
//     for(var i =1; i <= n; i++){
//         factorial = factorial *i;
//     }
//     return factorial;
// }
   
// var result = factorial(10);
// console.log(result);

/*whileloop*/

// var i = 1;
// while (i <= 10){
//     console.log(i);
//     i++;
// }

// var i = 1;
// var factorial=1;
// var i = 1;
// while (i <= 10){
//     factorial=factorial * i;
//     // console.log(i, factorial);
//     i++;
// }
// console.log(factorial);



// function factorial(n){
//     var i = 1;
//     var factorial = 1;
// while (i <= n){
//     factorial = factorial * i;
//     i++;
// }
//     return factorial;
// }
// var result= factorial(10);
// console.log(result);



/* Recursive factorial*/
// 10! = 1*2*3*4*5*6*7*8*9*10
//0! = 1
//2! = 1*2
//3! = 1*2*3
//4! = 1*2*3*4
//5! = 1*2*3*4*5
//6! = (6-1)!*6
//7! = (7-1)!*7
//n! = (n-1)!*n
function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial (n-1);
    }
}
var result = factorial(10);
console.log(result);
// for (var i = 10; i>=; i--){

// }
// var i =10;
// while(i>=1){

// }
