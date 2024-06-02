(() => {
    let stringArray = ["hello", "world", "this", "is", "javascript"];
    let titleCapsArray = stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    console.log("Title Caps Array:", titleCapsArray);
})();
