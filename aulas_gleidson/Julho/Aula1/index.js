const http = require('http')

const hostname = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
    res.end(req.url);
})

server.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`);
})