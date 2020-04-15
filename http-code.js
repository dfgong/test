const http = require('http');
const fs = require('fs');
http.createServer((request, response) => {
  if (request.url.includes('xxx')) {
    console.log(1);
    response.statusCode = 200;
    response.end('xxxxx');
  } else {
    const raw = fs.readFileSync('test.html');
    // response.setHeader('Location', '/xxx');
    // response.statusCode = 302;
    console.log(2);
    response.end(raw);
  }
}).listen(8000);