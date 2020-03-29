const fs = require('fs');
const path = require('path');
const types = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-icon",
};

function publicHandler(request, response) {
    let url = request.url;
    // console.log("publicHandler -> url", url)

    let assestUrlArray = url.split('.');
    let assetExtension = assestUrlArray[1];
    let type = types[assetExtension];
    
    
    const assetFilePath = path.join(__dirname, "..", url);

    fs.readFile(assetFilePath, (error, body) => {
        if(error) {
            console.log(error)
            response.writeHead(404, { "content-type": "text/html" });
            response.end("<h1>404: File not found</h1>");
        } else {
            response.writeHead(200, {"content-type": type});
            response.end(body);
        }
    })    
}

module.exports = publicHandler;