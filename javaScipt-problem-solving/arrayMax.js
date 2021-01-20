// let marks = [45, 81, 63, 98, 56, 35, 23];
// let max = marks[0];
// for (let i = 0; i < marks.length; i++) {
//     let element = marks[i];
//     if (element > max) {
//         max = element;
//     }
// }
// console.log("Highest value is:", max);

function arrayMax(list) {
    let max = list[0];
    for (let i = 0; i < list.length; i++) {
        let total = list[i];
        if (total > max) {
            max = total;
        }
    }
    return max;
}
let result = arrayMax([12, 3, 43, 54, 32, 42]);
console.log(result);