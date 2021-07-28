const http = require('http');
const {hello} = require("./basic");

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});

  // router
  let url = req.url;
  if (url === "/") hello(req, res);
  else {
    res.writeHead(404);
    res.end("Not found.");
  }

  // print log
  console.log(`At: ${new Date().toDateString()}, Url: ${url}, Response Code: ${res.statusCode}`);
}).listen(23334);
