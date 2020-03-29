const { parse } = require("querystring"); // Check how this destructuring works

let { getCount, increment, controlObject } = require("../model"); // Check how this destructuring works

function newPostHandler(request, response) {  
  let body = "";
  request.on("data", chunk => {
    body += chunk;
  });

  request.on("end", () => {
    // We could use new URLSearchParams
    // const data = new URLSearchParams(body);
    // const username = data.get("username");
    // const postTitle = data.get("post_title");
    // const blogMessage = data.get("blog_message");

    // Using the parse module to turn the querystring into an object is quicker
    let newPostObject = parse(body);
    // Increase the count to get new ID
    increment();
    let id = getCount();
    // Add newly created object to ControlObject
    controlObject[id] = newPostObject;
    response.writeHead(302, { location: "/" });
    response.end();
  });
  request.on("error", error => {
    console.log(error);
  });
}

module.exports = newPostHandler;
