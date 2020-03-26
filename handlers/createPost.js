const querystring = require("querystring");

function createPost(request, response) {
  let allTheData = "";
  request.on("data", function(chunkOfData) {
    allTheData += chunkOfData;
  });
  request.on("end", function() {
    let convertedData = querystring.parse(allTheData);
    console.log(convertedData);
    response.writeHead(302, { location: "/" });
    response.end();
  });
}

module.exports = createPost;
