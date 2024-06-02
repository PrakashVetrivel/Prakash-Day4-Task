(() => {
    let array = [14, 27, 33, 47, 56, 68, 78, 18, 99, 110];
    let oddNumbers = array.filter(number => number % 2 !== 0);
    console.log("Odd numbers in the array:", oddNumbers);
})();
