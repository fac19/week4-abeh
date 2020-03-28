let {controlObject} = require('../model'); // Why do we need {} here? The 'model' module already exports an object 

function getPostsHandler(request, response) {
    response.writeHead(200, {"content-type": "application/json"});
    response.end(JSON.stringify(controlObject))
}

module.exports = getPostsHandler;