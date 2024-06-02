(function() {
    let stringArray = ["madam", "hello", "racecar", "world", "level"];
    
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    let palindromes = stringArray.filter(isPalindrome);
    console.log("Palindromes in Array:", palindromes);
})();
