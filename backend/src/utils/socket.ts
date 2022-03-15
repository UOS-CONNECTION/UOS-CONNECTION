import * as http from 'http';
import { Server } from 'socket.io';

class SocketAPI {
  io: Server;

  constructor(server: http.Server) {
    this.io = new Server(server, {
      cors: {
        origin: process.env.FRONTNED_URL || 'http://localhost:3000',
      },
    });
  }

  connectSocket() {
    this.io.on('connection', (socket) => {
      console.log(`[Socket] User ${socket.id} connected`);
      socket.on('message', (data) => {
        //database 추가
        this.io.emit('upload', data);
      });
    });
    this.io.on('disconnection', (socket) => {
      console.log(`[Socket] User ${socket.id} disconnected`);
    });
  }

  emit(event, data) {
    this.io.sockets.emit(event, data);
  }
}

export default SocketAPI;
