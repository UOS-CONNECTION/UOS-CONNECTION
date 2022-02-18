import express from 'express';
import tempController from '@src/controllers/temp.controller';

const tempRouter = express.Router();

tempRouter.get('/', tempController.test);

export default tempRouter;
