const fs = require('fs');

const path = require('path')

//Create a folder - by default, these are asynchronous meaning it takes in a callback, however there is a synchronous version of most of these methods
//Takes in the folder you want to create, folder called test inside our current directory
//2nd Parameter of mkdir is options, then a callback
//If we look in our reference folder, we now have a folder called test
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//     if (err) throw err;
//     console.log('Folder created...')
// })

//Create a file and write to it  - takes in path to file you want to create
//2nd param - content you want to write
//If we look on our test folder, now there's hello.text file
//WriteFile overrides w/e is already in there, if you want to append to it, you want to use appendFile, but since I want to run both and this is asynchronos, put this whole thing in a callback 
// fs.writeFile(path.join(__dirname, "/test", "hello.text"), "I love nodeJS", (err) => {
//     if (err) throw err;
//     console.log('File written to...')

//     //File Append
//     fs.appendFile(path.join(__dirname, "/test", "hello.text"), "I am appending ", (err) => {
//         if (err) throw err;
//         console.log('File written to...')
//     })

// })



//Read file - 2nd param is character encoding, utf8
// fs.readFile(path.join(__dirname, "/test", "hello.text"), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

//Rename a file - 2nd parameter, path and new fileName
fs.rename(
    path.join(__dirname, "/test", "helloworld.txt"),
    path.join(__dirname, "/test", "hello.txt"), (err, data) => {
        if (err) throw err;
        console.log("File renamed")
    }
)

