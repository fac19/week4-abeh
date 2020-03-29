const publicHandler = require("./handlers/public");
const homehandler = require("./handlers/home");
const missingHandler = require("./handlers/missing");
const createPostHomeHandler = require("./handlers/create");
const newPostHandler = require("./handlers/new");
const getPostsHandler = require("./handlers/getposts");
const deletePostHandler = require("./handlers/deletepost");

function router(request, response) {
  const { url, method, header } = request;

  //   console.log("router -> header", header);

  if (url === "/" && method === "GET") {
    homehandler(request, response);
  } else if (url === '/getposts') {
    getPostsHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else if (url === "/createpost" && method === "GET") {
    createPostHomeHandler(request, response);
  } else if (url === "/createpost" && method === "POST") {
    newPostHandler(request, response);
  } else if (url === "/" && method === "DELETE") {
    deletePostHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
