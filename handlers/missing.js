const fs = require("fs");
const path = require("path");

function missingHandler(request, response) {
  fs.readFile(path.join(__dirname, '..', 'public', 'error.html'), function(error, file){
    response.writeHead(404, { "content-type": "text/html" });
    response.end(file);
  })
  }
  
  module.exports = missingHandler;