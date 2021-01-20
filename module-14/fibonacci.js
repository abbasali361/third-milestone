var fibo = [0,1];
// fibo[2] = fibo[2-1] + fibo[2-2]
// fibo[3] = fibo[3-1] + fibo[3-2]
// fibo[4] = fibo[4-1] + fibo[4-2]
// fibo[5] = fibo[5-1] + fibo[5-2]
// fibo[n] = fibo[n-1] + fibo[n-2]
// fibo[i] = fibo[i-1] + fibo[i-2]
for(var i = 2; i <= 12; i++){
    fibo[i]= fibo[i-1] + fibo[i-2];
    // console.log(fibo[i], fibo[i-1], fibo[i-2]);
}
console.log(fibo);

/**function diye fibonacci */

function fibonacci(n){
    for(var i = 2; i <= 12; i++){
        fibo[i]= fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
var result = fibonacci(12);
console.log(result);

/**fibonacci recurdive way */

function fibonacci(n){
    /**stopping condition */
    if (n == 0){
        return 0;
    }
    if( n == 1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
var result = fibonacci(10);
console.log(result);

/**fibonacci series in a  recurdive way */
//[0,1,,1,2,3,5,8,13,21]
function fibonacci(n){
    if(n == 0){
        return[0];
    }
    else if(n == 1){
        return [0,1];
    }
    else{
        //calulate arry nth element 
        var fibo = fibonacci(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}

var result = fibonacci(10);
console.log(result);

/**Check weather a number is a Prime Number or not */
var n = 70;
// nub % 2 == 0;
for(i = 2; i < n; i++){
    // console.log(n/i);
    // console.log(i, n/i);
    // console.log(i, n % i);
    if(n%i == 0){
        console.log('not a prime number');
        break;
    }
}
console.log(' Your number is a Prime nubmer');


// var n = 128;
function isPrime(n){
    for (i = 2; i < n; i++){
        if ( n% i == 0){
            return 'Not a prime number';
        }
    }
    return 'Your Number is a prime number';
}
var result = isPrime(127);
console.log(result);