import { Server } from 'socket.io';

const io = new Server();
const Socket = {
  emit: (event, data) => {
    console.log(event, data);
    io.sockets.emit(event, data);
  },
};

io.on('connection', (socket) => {
  console.log(`User ${socket.id} connected`);
  socket.on('message', (data) => {
    //database 추가
    io.emit('upload', data);
  });
});
io.on('disconnection', (socket) => {
  console.log(`User ${socket.id} disconnected`);
});
export { Socket, io };
