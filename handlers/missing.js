function missingHandler(request, response) {
    response.writeHead(404, { "content-type": "text/html" });
    response.end('<h1>Sorry the page is not found<h1>');
}

module.exports = missingHandler;