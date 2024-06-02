let array = [1, 2, 2, 3, 4, 4, 5, 5, 6,7,8,9,7,8,9,];

// Anonymous function to remove duplicates from an array
let removeDuplicates = function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
};

let uniqueArray = removeDuplicates(array);

console.log(uniqueArray);
