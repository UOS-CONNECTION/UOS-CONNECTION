import * as http from 'http';
import { Server, Socket } from 'socket.io';

import { ChatEvent, ConnectionEvent } from '@src/types/socket-type';
import SokcetChatController from '@src/controllers/socket/socket.chat.controller';

export let io: Server;

class SocketAPI {
  constructor(server: http.Server) {
    io = new Server(server, {
      cors: {
        origin: process.env.FRONTNED_URL || 'http://localhost:3000',
      },
    });
  }

  connectSocket() {
    io.on(ConnectionEvent.connection, (socket: Socket) => {
      console.log(`[Socket] User ${socket.id} connected`);

      // Observer Event
      this.observerChatEvent(socket);
    });
  }

  observerChatEvent(socket: Socket) {
    const socketChatController = new SokcetChatController(socket);
    socket.on(ChatEvent.message, socketChatController.sendMessage);
    socket.on(ConnectionEvent.disconnection, socketChatController.leaveChat);
  }
}

export default SocketAPI;
