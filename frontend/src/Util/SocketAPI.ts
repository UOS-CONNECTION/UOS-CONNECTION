import { io, Socket } from 'socket.io-client';

import { ChatEvent } from './Constant';
import { HandlerType, Message } from '../Types/Type';

class SocketAPI {
  socket: Socket;

  constructor(server: string) {
    this.socket = io(server, {
      transports: ['websocket'],
      upgrade: false,
      forceNew: true,
    });
  }

  sendMessage(newMessage: Message) {
    this.socket.emit(ChatEvent.MESSAGE, newMessage);
  }

  onEvent(msg: string, handler: HandlerType) {
    this.socket.on(msg, handler);
  }

  offEvent(msg: string, handler: HandlerType) {
    this.socket.off(msg, handler);
  }
}

export default new SocketAPI('http://localhost:8080');
