import { Socket } from 'socket.io';
import { DatabaseEvent } from '@src/types/socket-type';

import { io } from '../../utils/socket';

class SokcetChatController {
	socket: Socket;

	constructor(socket: Socket) {
		this.socket = socket;
	}

	sendMessage(data) {
		// TODO
		// 데이터베이스 연동
		io.emit(DatabaseEvent.upload, data);
	}

	leaveChat() {
		console.log(`[Socket] User ${this.socket.id} disconnected`);
	}
}

export default SokcetChatController;
