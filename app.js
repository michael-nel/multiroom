const app = require("./config/server.js");
const server = app.listen(3000, () => console.log("Server On"));
const io = require('socket.io').listen(server);

app.set('io', io);
io.on('connection', (socket) => {
  socket.on('disconnect', function () {});

  socket.on('msgToServer', function (data) {

    socket.emit('msgToClient', {
      name: data.name,
      message: data.message
    });

    socket.broadcast.emit('msgToClient', {
      name: data.name,
      message: data.message
    });


    socket.emit('partneerToClient', {
      name: data.name
    });

    socket.broadcast.emit('partneerToClient', {
      name: data.name
    });
  });

});