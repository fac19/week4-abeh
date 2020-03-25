const http = require("http");
const fs = require("fs");
const path = require("path");
const homeHandler = require('./handlers/homeHandler')
const blogHandler = require('./handlers/blogHandler')
const missingHandler = require('./handlers/missingHandler')
const server = http.createServer(handler);
const querystring = require('querystring');
const message = "hello!";
const types = {
  css: "text/css",
  html: "text/html",
  js: "application/javascript"
};

function handler(request, response) {
  const endpoint = request.url;
  const method = request.method;
  const filePath = path.join(__dirname, "/public");
  
  if (endpoint === "/") {
      homeHandler(request, response);
  } 
  else if (endpoint === "/create-post") {
      blogHandler(request, response);
   
    
  } else {
     missingHandler(request, response)
  }
}

server.listen(3000, function() {
  console.log("Server is listening on port 3000!");
});
