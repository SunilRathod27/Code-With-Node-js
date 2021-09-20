const fs = require('fs');
const http = require('http');

const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)

    if (req.url == '/hello') {
        res.end('<h1>This Is Aliter </h1>');

    }

    else if (req.url == '/about') {
        res.end('<h1>About Is Aliter </h1>');
    }

    else if (req.url == '/') {
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }



    else {
        // res.sunil();
        res.statusCode = 404;
        res.end('<h1>Not Found</h1> <p> Hey this page is not found </p>')
    }




})
server.listen(port, () => {
    ``
    console.log(`Server s listening on port ${port}`)

});