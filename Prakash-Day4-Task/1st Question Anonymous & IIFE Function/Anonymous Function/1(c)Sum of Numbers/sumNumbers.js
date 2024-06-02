let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);
