(function() {
    let numArray = [1, 2, 3, 4, 5];
    let sum = numArray.reduce(function(acc, num) {
        return acc + num;
    }, 0);
    console.log("Sum of Array:", sum);
})();
