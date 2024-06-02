let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let median = function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    let length = mergedArray.length;
    if (length % 2 === 0) {
        return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
    } else {
        return mergedArray[Math.floor(length / 2)];
    }
};

console.log(median(arr1, arr2));
