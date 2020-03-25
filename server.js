const http = require('http');
const fs = require('fs');
const server = http.createServer(handler);
const message = "hello!";
const endpoint = request.url;

function handler(request, response) {
    const method = request.method;
    if (endpoint === "/") {
        response.writeHead(200, { 'content-type': 'text/html'});

        fs.readFile(__dirname + '/public/index.html', function(error, file) {
            if (error) {
                console.error(error);
                return;
            }

            response.end(file);
        })
    }//homepage


    if (endpoint === "/blog" && method === "POST") // blog post page
    else 
    
    
    
    
}

server.listen(3000, function () {
    console.log("Server is listening on port 3000!");
});