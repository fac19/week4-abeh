const querystring = require("querystring");
const fs = require("fs");
const parse = require("node-html-parser").parse;

function createPost(request, response) {
  let allTheData = "";
  request.on("data", function(chunkOfData) {
    allTheData += chunkOfData;
  });
  request.on("end", function() {
    console.log("DATA", allTheData);
    let convertedData = querystring.parse(allTheData);

    fs.readFile("./public/index.html", "utf8", (err, html) => {
      if (err) {
        throw err;
      }
      const root = parse(html);
      const body = root.querySelector(".blogPost__container");

      body.appendChild(` 
      <article class="blogPost__container__post" tabindex="0">
          <h2 class="blogPost__container__title">${convertedData.blogPostTitle}</h2>
          <h3 class="blogPost__container__author">by: ${convertedData.user}</h3>
          <p class="blogPost__container__content">${convertedData.blogpost}</p>
      </article>
      `);
      fs.writeFile("./public/index.html", root.toString(), "utf8", function(
        err
      ) {
        if (err) return console.error(err);
        response.writeHead(302, { location: "/" });
        response.end();
      });
    });
  });
}

module.exports = createPost;
