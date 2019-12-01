const http = require('http')

//Create a server object - takes in a function, paraemeters we need are req and response. When we get a request, we want to then write a response.
//In order for this to run, it needs to take in a port, then after put a callback to console.log just so it shows something in the console. 
http.createServer((req, res) => {
    //Write response
    res.write("Hello World");
    res.end();
}).listen(5000, () => console.log("Server running ..."))