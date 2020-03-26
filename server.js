const http = require("http");

const router = require("./router");

const server = http.createServer(router);

server.listen(3000, function() {
  console.log("Server is listening on port 3000!");
});
