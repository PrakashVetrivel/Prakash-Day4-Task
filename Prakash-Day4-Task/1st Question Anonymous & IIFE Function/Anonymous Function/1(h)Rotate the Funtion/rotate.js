let array = [1, 2, 3, 4, 5];
let k = 2;

// Anonymous function to rotate an array by k times
let rotateArray = function(arr, k) {
    let rotationIndex = k % arr.length;
    let rotatedArray = arr.slice(rotationIndex).concat(arr.slice(0, rotationIndex));
    return rotatedArray;
};

let rotatedArray = rotateArray(array, k);

console.log(rotatedArray);
