const fs = require("fs");
const path = require("path");

function createPostHomeHandler(request, response) {
  const createPostFilePath = path.join(__dirname, "..", "public", "createpost.html");
  
  fs.readFile(createPostFilePath, (error, body) => {
    if (error) {
        response.writeHead(404, { "content-type": "text/html" });
        response.end("<h1>404: File not found</h1>");
    } else {
        response.writeHead(200, { "content-type": "text/html" });
        response.end(body);
    }
  });
}

module.exports = createPostHomeHandler;
