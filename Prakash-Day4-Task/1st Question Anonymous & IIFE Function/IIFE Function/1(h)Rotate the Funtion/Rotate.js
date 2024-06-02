(function() {
    let array = [1, 2, 3, 4, 5];
    let k = 2;

    function rotateArray(arr, k) {
        k = k % arr.length; // Ensure k is within array bounds
        return arr.slice(-k).concat(arr.slice(0, -k));
    }

    let rotatedArray = rotateArray(array, k);
    console.log("Array Rotated by", k, "times:", rotatedArray);
})();
