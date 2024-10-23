const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html' });
    if (req.url == "/") {
        fs.readFile("index.html", "utf-8", (err, data) => {
            if (err) {
                console.log("Error");
            }
            else {
                res.end(data);
            }
        })
    }

    else if (req.url == "/login") {
        res.end("login success")
    }
    else if (req.url == "/signup") {
        res.end("signup success")
    }
    else if (req.url == "/contact") {
        res.end("contact success")
    }
    else if (req.url == "/service") {
        res.end("service success")
    }
})

server.listen(8090, () => {
    console.log("Server is startedn");

})