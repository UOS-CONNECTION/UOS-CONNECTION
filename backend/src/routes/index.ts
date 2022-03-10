import { Router } from "express";
import postRouter from "./post.router";
import tempRouter from "./temp.router";
import userRouter from "./user.router";

const rootRouter = Router();

rootRouter.use("/temp", tempRouter);
rootRouter.use("/user", userRouter);
rootRouter.use("/post", postRouter);

export default rootRouter;
