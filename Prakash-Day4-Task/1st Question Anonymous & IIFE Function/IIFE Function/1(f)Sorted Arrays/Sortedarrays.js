(function() {
    let array1 = [1, 3, 5];
    let array2 = [2, 4, 6];

    function getMedianOfTwoSortedArrays(arr1, arr2) {
        let combinedArray = arr1.concat(arr2).sort((a, b) => a - b);
        let midIndex = combinedArray.length / 2;
        if (combinedArray.length % 2 === 0) {
            return (combinedArray[midIndex - 1] + combinedArray[midIndex]) / 2;
        } else {
            return combinedArray[Math.floor(midIndex)];
        }
    }

    let median = getMedianOfTwoSortedArrays(array1, array2);
    console.log("Median of Two Sorted Arrays:", median);
})();
