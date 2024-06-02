(function() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let oddNumbers = array.filter(function(number) {
        return number % 2 !== 0;
    });
    console.log("Odd numbers in the array:", oddNumbers);
})();
