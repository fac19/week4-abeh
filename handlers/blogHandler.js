const types = {
    css: "text/css",
    html: "text/html",
    js: "application/javascript",
}

function blogHandler(request, response){
    var allTheData = "";
    request.on("data", function(chunkOfData) {
      allTheData += chunkOfData;
    });
    request.on('end', function () {
       let convertedData = querystring.parse(allTheData);
       console.log(convertedData);
       response.writeHead(302, {'location': '/'});
       response.end();
    });
}

module.exports = blogHandler