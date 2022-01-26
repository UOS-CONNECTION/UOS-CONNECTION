import express from 'express';
import tempController from '@src/controllers/temp-controller';

const router = express.Router();

router.get('/', tempController.test);

export default router;
