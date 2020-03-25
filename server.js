const http = require('http');

const server = http.createServer(handler);

const message = "hello!";

function handler(request, response) {
    
    response.writeHead(200, { 'content-type': 'text/html'});
    response.write(message);
    response.end();
}

server.listen(3000, function () {
    console.log("Server is listening on port 3000!");
});