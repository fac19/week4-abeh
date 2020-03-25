const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer(handler);
const message = "hello!";
const types = {
  css: "text/css",
  html: "text/html",
  js: "application/javascript"
};

function handler(request, response) {
  const endpoint = request.url;
  const method = request.method;
  const urlArray = request.url.split("."); // e.g. "/style.css" -> ["/style", "css"]
  const extension = urlArray[1]; // e.g. "css"
  const type = types[extension]; // e.g. "text/css"
  const filePath = path.join(__dirname, "/public/index.html");
  console.log(filePath);
  console.log(endpoint);

  if (endpoint === "/") { 

    fs.readFile(filePath, function(error, file) {
      if (error) {
        console.error(error);
        response.writeHead(404, { "content-type": "text/html" });
        response.end("<h1>Not found</h1>");
      } else {
        response.writeHead(200, { "content-type": "text/html" });
        response.end(file);
      }
    });
  } 
//   else if (endpoint === "/blog" && method === "POST") {
//     var allTheData = "";
//     request.on("data", function(chunkOfData) {
//       allTheData += chunkOfData;
//     });
//     request.on('end', function () {
//         console.log(allTheData);
//         response.end();
//     });
    
//   } else {
//     //catch errors
//   }
}

server.listen(3000, function() {
  console.log("Server is listening on port 3000!");
});
