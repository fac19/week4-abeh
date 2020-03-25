const fs = require('fs');
const path = require('path')
const types = {
    css: "text/css",
    html: "text/html",
    js: "application/javascript",
}

function homeHandler(request, response) {
    const endpoint = request.url;
    const method = request.method;
    const urlArray = request.url.split("."); // e.g. "/style.css" -> ["/style", "css"]
    const extension = urlArray[1]; // e.g. "css"
    const type = types[extension]; // e.g. "text/css"
    
    if (endpoint === "/") {
        const filePath = path.join(__dirname, "/public")

        fs.readFile(filePath + '/index.html', function(error, file) {
            if (error) {
                console.error(error);
                response.writeHead(404, {'content-type': "text/html"});
                response.end("<h1>Not found</h1>");
              } else {
                response.writeHead(200, { 'content-type': 'text/html' });
                response.end(file);
              }
        })
    }
}
    
module.exports = homeHandler;
