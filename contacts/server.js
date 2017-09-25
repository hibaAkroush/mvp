
var http = require('http');

http.createServer(function(request, response) {
  console.log(request);
  response.writeHead(200, {['Content-Type']: 'text/plain'});
  response.end('Hello, World!');
}).listen(3000, '127.0.0.1')


console.log('Listening on http://');
