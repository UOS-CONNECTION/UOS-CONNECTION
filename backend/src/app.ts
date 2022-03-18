import cors from 'cors';
import * as http from 'http';
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import sessionStore from 'session-file-store';

import DBConfig from './db';
import rootRouter from './routes';
import SocketAPI from './utils/socket';
import passportAPI from './utils/passport';

const FileStore = sessionStore(session);

export default class App {
  app: express.Application;
  port: string;
  server: http.Server;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8080';
    this.config();
    this.middleware();
    this.route();
  }

  private config() {
    this.app.use(express.urlencoded({ extended: false })); // body parsing
    this.app.use(express.json()); // json parsing
    this.app.use(passport.initialize());
    this.app.use(
      session({
        secret: 'asadlfkj!@#!@#dfgasdg',
        resave: false,
        saveUninitialized: true,
        store: new FileStore(),
      })
    );
    passportAPI.observerLocalLogin();
    DBConfig.connectionDB();
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
    const socketAPI = new SocketAPI(this.server);
    socketAPI.connectSocket();
  }
}
