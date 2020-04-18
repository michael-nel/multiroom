const app = require("./config/server.js");
const server = app.listen(3000, () => console.log("Server On"));
require('socket.io').listen(server);