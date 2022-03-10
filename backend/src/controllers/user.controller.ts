import { NextFunction, Request, Response } from "express";

const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const crypto = require("crypto"); /* 비번 암호화해서 저장하기 위한 모듈 */

const sample = {
  email: "aaa",
  password: "bbb",
  nickname: "jiham",
};

class userController {
  // example user
  async temp(req: Request, res: Response, next: NextFunction) {
    try {
      // const UserRepository = getCustomRepository(UserRepository)
      return res.json({
        user_name: "이상민",
        user_email: "poiu694",
      });
    } catch (err) {
      res.sendStatus(400);
    }
  }

  async signUp(req: Request, res: Response, next: NextFunction) {}

  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("signin good!");
      console.log(req.body);

      passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
      });
    } catch (err) {
      console.log("signin error");
      res.sendStatus(400);
    }
  }

  async signOut(req: Request, res: Response, next: NextFunction) {}

  async naverSignIn(req: Request, res: Response) {}

  async googleSignIn(req: Request, res: Response) {}

  async kakaoSignIn(req: Request, res: Response) {}

  getUserData(req: Request, res: Response) {}

  async updateUser(req: Request, res: Response) {}
}

export default new userController();
