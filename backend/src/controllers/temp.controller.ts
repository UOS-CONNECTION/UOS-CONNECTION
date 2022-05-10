import { Request, Response } from 'express';

const tempController = {
	test(req: Request, res: Response) {
		res.json({ message: 'Hi this is test message' });
	},
};

export default tempController;
