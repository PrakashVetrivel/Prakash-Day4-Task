let strings = ["prakash", "javascript is easy", "today topic is string to title caps"];

let titleCapsStrings = strings.map(function(str) {
    return str.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
});

console.log(titleCapsStrings);
