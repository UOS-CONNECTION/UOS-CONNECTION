import express from 'express';
import cors from 'cors';

import tempRouter from '@routes/temp-router';

export default class App {
  app: express.Application;
  port: string;
  server: any;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '4000';
    this.config();
    this.middleware();
    this.route();
  }

  private config() {}

  private middleware() {
    const corsOption = {
      origin: process.env.FRONTEND_URL || 'http://localhost:3000',
      credentials: true,
    };
    this.app.use(cors(corsOption));
  }

  private route() {
    this.app.use('/api/temp', tempRouter);
  }

  listen() {
    this.server = this.app.listen(this.port, () => {
      console.log(`LISTEN ON PORT ${this.port}`);
    });
  }
};