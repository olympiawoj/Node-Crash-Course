const http = require('http')
const path = require('path')
const fs = require('fs')

//Create a new server object, 

const server = http.createServer((req, res) => {
    console.log(req.url)
    //index page
    // if (req.url === '/') {

    //     fs.readFile(path.join(__dirname, 'public',
    //         'index.html'), (err, content) => {
    //             //check for err
    //             if (err) throw err;
    //             //add content type
    //             res.writeHead(200, { 'Content-Type': "text/html" })
    //             //can put HTML here, see h1 Home on the webpage
    //             res.end(content)
    //         })
    // }


    // if (req.url === '/api/users') {
    //     const users = [
    //         { name: "Bob Smith", age: 40 },
    //         { name: "John Doe", age: 30 }
    //     ]
    //     //we want this to be 200 response, but this is json content so we wouudlnt do text.html, we'd do application.json. 
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(users))

    // }

    //Build file path, current dir name + public + requestURL. 
    let filePath = path.join(__dirname, "public", req.url === "/" ? 'index.html' : req.url)
    console.log(filePath)
    // res.end()

    //Extension of file
    let extname = path.extname(filePath)
    //Initial Content Type
    let contentType = "text/html"

    //Check ext and set content type
    switch (extname) {
        case '.js':
            contentType = "text/javascript";
            break;
        case '.css':
            contentType = "text/css";
            break;
        case '.json':
            contentType = "application/json";
            break;
        case '.png':
            contentType = "image/png";
            break;
        case '.jpg':
            contentType = "image/jpg";
            break;
    }

    // Check if contentType is text/html but no .html file extension
    if (contentType == "text/html" && extname == "") filePath += ".html";

    console.log(filePath)



    //Read File
    fs.readFile(filePath, (err, content) => {
        //Check for sepcific type of error 
        if (err) {
            if (err.code = "ENOENT") {
                //Page not found 
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    //send 200 response
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                //if diff error, some server error
                res.writeHead(500);
                res.end(`Server Error ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content, 'utf8')
        }

    })
})


const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))