(function() {
    let stringArray = ["prakash", "world", "this", "is", "javascript"];
    let titleCapsArray = stringArray.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log("Title Caps Array:", titleCapsArray);
})();
