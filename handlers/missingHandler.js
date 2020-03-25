const types = {
    css: "text/css",
    html: "text/html",
    js: "application/javascript",
}

function missingHandler(request, response){
    console.error(error);
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>Not found</h1>");
}

module.exports = missingHandler