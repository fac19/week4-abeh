// Use the fs 'file system' core module to read and write files to the hard drive
const fs = require("fs");
const path = require("path");
var messageBlog = "I am so happy to be part of the blog!";

const types = {
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
  jpg: "image/jpeg",
  ico: "image/x-icon"
};

function blogHandler(request, response) {
  const url = request.url; // This is just taking the endpoint '/blog'
  // console.log(url);
  const urlArray = url.split("."); // Therefore it is not splitting anything
  const extension = urlArray[1];
  const type = types[extension]; // And it will not record a property from the types object
  // console.log(type);

  

  const filePath = path.join(__dirname, "../public/index.html");
  console.log(filePath);
  // console.log(path.join(filePath + '/index.html'));

  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Blog Not found</h1>");
    } else {
      response.writeHead(200, { "content-type": "text/html" });
      // console.log(file);
      response.end(file);
    }
  });
  // response.end(); 

}

module.exports = blogHandler;
