import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import connectionOptions from '../ormconfig';
import { io } from './utils/socket';

import rootRouter from './routes';

export default class App {
  app: express.Application;
  port: string;
  server: any;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8080';
    this.config();
    this.middleware();
    this.route();
  }

  private config() {
    this.app.use(express.json()); // json parsing
    this.app.use(express.urlencoded({ extended: false })); // body parsing
    createConnection(connectionOptions).then(() => {
      console.log('DB Connection');
    });
  }

  private middleware() {
    const corsOption = {
      origin: process.env.FRONTEND_URL || 'http://localhost:3000',
      credentials: true,
    };
    this.app.use(cors(corsOption));
  }

  private route() {
    this.app.use('/api', rootRouter);
  }

  listen() {
    this.server = this.app.listen(this.port, () => {
      console.log(`LISTEN ON PORT ${this.port}`);
    });
    io.attach(this.server);
  }
}
