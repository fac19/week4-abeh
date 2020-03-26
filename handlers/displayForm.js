const fs = require("fs");
const path = require("path");

function displayForm(request, response) {
    fs.readFile(path.join(__dirname, "..", "public", "displayForm.html"), function(error, file) {
        if (error) {
            console.error(error);
            response,writeHead(404, {'content-type': 'text/html'});
            response.end("<h1>Not found</h1>");
        } else {
            response.writeHead(200, { "content-type": "text/html"});
            response.end(file);
        }
    });
}

module.exports = displayForm;