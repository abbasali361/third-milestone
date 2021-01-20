// var marks = [89, 39, 83, 94, 86, 79];
// for (var i = 0; i < marks.length; i++) {
//     var element = marks[i];
//     console.log(element);
// }
// console.log('outside');
// console.log('gulisthan');


// function add(number1, number2) {
//     var total = number1 + number2;
//     return total;
// }
// var result1 = add(65, 89);
// console.log(result1);
// var adam = 'adam Sandler';
// var kodom = 'kodom Ali'
// console.log('not adding this time');
// console.log('not eating right now');
// var result2 = add(144, 568);
// console.log(result2);

function largesNumber(numbers){
    for(var i = 0; i< numbers.length; i++){
        var element = numbers[i];
        // console.log(element);
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}
var output =largesNumber([45, 78, 89]);
console.log('output', output);