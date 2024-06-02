(function() {
    let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
    let uniqueArray = Array.from(new Set(arrayWithDuplicates));
    console.log("Array without Duplicates:", uniqueArray);
})();
