const http = require('http');

http.createServer( (requet, response) => {
    response.statusCode = 200 ;
    response.setHeader('Content-Type', 'text/plain');
    response.end('hello world');
}).listen(3000);

console.log('server running at http://127.0.0.1:3000/')