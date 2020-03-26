const homeHandler = require("./handlers/home");
const createPost = require("./handlers/createPost");

const fs = require("fs");

function router(request, response) {
  const endpoint = request.url;
  console.log(endpoint);
  const method = request.method;
  //   const filePath = path.join(__dirname, "/public");
  if (endpoint.includes("public")) {
    // write a handler to read css or js files
  }
  if (endpoint === "/") {
    homeHandler(request, response);
  } else if (method === "POST" && endpoint === "/create-post") {
    createPost(request, response);
  } else {
    //catch errors
  }
}

module.exports = router;
