const path = require('path');

//Entire path and filename at the end
console.log(__filename)

//Base file name
console.log(path.basename(__filename))

//Directory name - reference
console.log(path.dirname(__filename))
//Same as, but above we're using the path module
console.log(__dirname)

//File extension - .js
console.log(path.extname(__filename))

//Create path object with diff parts of path 
console.log(path.parse(__filename))
//Since this is an object we can access any property
console.log(path.parse(__filename).base)

//Concatenate paths - let's say we want to create ../test/hello.html, works well when you have issues with delimiters
console.log(path.join(__dirname, "test", "hello.html"))