let numbers = [11, 21, 31, 44, 53, 63, 75, 81, 99, 100];
let isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
let primeNumbers = numbers.filter(function(num) {
    return isPrime(num);
});

console.log(primeNumbers);
