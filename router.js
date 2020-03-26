const homeHandler = require("./handlers/home");
const createPost = require("./handlers/createPost");
const missingHandler = require("./handlers/missing");
const publicHandler = require("./handlers/public.js")

const fs = require("fs");

function router(request, response) {
  const endpoint = request.url;
  console.log("router -> endpoint", endpoint)
  const method = request.method;
  //   const filePath = path.join(__dirname, "/public");
  if (endpoint === "/") {
    homeHandler(request, response);
  } else if (endpoint.includes("public")) {
    publicHandler(request, response)
  } else if (method === "POST" && endpoint === "/create-post") {
    createPost(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
