(() => {
    let stringArray = ["madam", "hello", "racecar", "world", "level"];
    
    const isPalindrome = str => str === str.split('').reverse().join('');

    let palindromes = stringArray.filter(isPalindrome);
    console.log("Palindromes in Array:", palindromes);
})();
