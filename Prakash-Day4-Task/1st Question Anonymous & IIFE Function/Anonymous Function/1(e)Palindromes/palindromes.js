let words = ["MOM", "hello", "WOW", "world", "NOON"];

// Helper function to check if a string is a palindrome
let isPalindrome = function(word) {
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
};

// Anonymous function to filter palindromes
let palindromes = words.filter(function(word) {
    return isPalindrome(word);
});

console.log(palindromes);
