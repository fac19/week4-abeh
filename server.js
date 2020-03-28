const http = require('http');
const router = require('./router');
const hostname = "localhost";
const port = process.env.PORT || 4001;

// Create a web server object 
const server = http.createServer(router);

// The function 'router' is known as the request handler
// It is called once for every HTTP request that is made against the server 

// When a HTTP request hits the server, node calls the request handler function
// and passes in two objects REQUEST & RESPONSE

server.listen(port, hostname, () => {
    console.log(`Nice one! You server is running at port http://${hostname}:${port}`);
  });