const http = require('http')
const path = require('path')
const fs = require('fs')

//Create a new server object, 

const server = http.createServer((req, res) => {
    console.log(req.url)
    //index page
    if (req.url === '/') {

        fs.readFile(path.join(__dirname, 'public',
            'index.html'), (err, content) => {
                //check for err
                if (err) throw err;
                //add content type
                res.writeHead(200, { 'Content-Type': "text/html" })
                //can put HTML here, see h1 Home on the webpage
                res.end(content)
            })
    }

    //about page

    if (req.url === '/about') {

        fs.readFile(path.join(__dirname, 'public',
            'about.html'), (err, content) => {
                //check for err
                if (err) throw err;
                //add content type
                res.writeHead(200, { 'Content-Type': "text/html" })
                //can put HTML here, see h1 Home on the webpage
                res.end(content)
            })
    }
})


const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))