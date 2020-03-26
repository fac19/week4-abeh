const querystring = require("querystring");
const fs = require("fs");
const parse = require("node-html-parser").parse;

function createPost(request, response) {
  let allTheData = "";
  request.on("data", function(chunkOfData) {
    allTheData += chunkOfData;
    
  });
  request.on("end", function() {
    console.log("DATA", allTheData)
    let convertedData = querystring.parse(allTheData);
    console.log("This is converted data", convertedData);

    fs.readFile("./public/index.html", "utf8", (err, html) => {
      if (err) {
        throw err;
      }
      const root = parse(html);
      const body = root.querySelector("body");
      console.log(convertedData);
      body.appendChild(`<div>${convertedData.blogpost}</div>`);

      fs.writeFile("./public/index.html", root.toString(), "utf8", function(
        err
      ) {
        if (err) return console.error(err);
        response.writeHead(302, { location: "/" });
        response.end();
      });
      //   console.log(root.toString()); // This you can write back to file!
    });
  });
}

module.exports = createPost;
