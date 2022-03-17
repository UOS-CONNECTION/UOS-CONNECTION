import { NextFunction, Request, Response } from "express";

var passport = require("passport");

class loginController {
  async temp(req: Request, res: Response, next: NextFunction) {
    try {
      res.render("login");
    } catch (err) {
      res.sendStatus(400);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
      });
    } catch (err) {
      res.sendStatus(400);
    }
  }
}

export default new loginController();
