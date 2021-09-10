const http = require("http");

const routes = require("./routes");
const server = http.createServer(routes);
//name of the file we import
// in second method we need to access routes.handler

server.listen(3000);
