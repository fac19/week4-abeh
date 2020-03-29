const {controlObject} = require("../model"); // Why do we need {} here? The 'model' module already exports an object

function deletePostHandler(request, response) {
  let index = "";
  request.on("data", chunk => {
    index += chunk;
  });
  request.on("end", () => {
    console.log("deletePostHandler -> objectKey", index);
    console.log("deletePostHandler -> controlObject", controlObject)
    delete controlObject[index];
    console.log("deletePostHandler -> controlObject after", controlObject)
    response.writeHead(200, { "content-type": "text/html" });
    response.end();
  });
  request.on("error", error => {
    console.log(error);
  });
}

module.exports = deletePostHandler;
