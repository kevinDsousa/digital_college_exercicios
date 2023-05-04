const http = require('http');
//import http from "http";

const PORT = 8001;

http.createServer(async (req, res) => {
  console.log("Request", req);

  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000,
  })

  res.end(
    JSON.stringify(
        {
            "name": "Kevin diego",
            "idade": 28,
            "github": "https://github.com/kevinDsousa.png"
        }
    )
  );
}).listen(PORT);

console.log(`Server running at http://localhost:${PORT}`);
