import UserRepository from "@src/repositories/user.repository";
import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import passport from "passport";
import express from "express";

import CryptoAPI from "../utils/crypto";

const LocalStrategy = require("passport-local");

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

  async signUp(req: Request, res: Response, next: NextFunction) {
    if (req.user) {
      return res.redirect("/");
    }
    res.render("/signup", {
      title: "Create Account",
    });
  }

  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const hashedPassword = await CryptoAPI.getHashedPassword(password);

      const userRepository = getCustomRepository(UserRepository);

      // 예외 처리 1 인풋 값 에러
      if (!email || !password) {
        return res.send(401);
      }
      const existedUser = await userRepository.findByEmail(email);

      // 예외처리 2 데이터베이스에 유저 이메일이 없는 경우
      if (!existedUser) {
        return res.send(409);
      }
      // 예외처리 3 입력 패스워드와 데이터베이스 패스워드가 다른 경우
      if (existedUser.password !== hashedPassword) {
        return res.send(403);
      }
      // 로그인 로직 실행 (세션 저장, 리턴 200 해주면서 프론트에게 정상작동 알림)

      passport.authenticate(
        "local"
        /* (err: Error, user: UserEntity, info: IVerifyOptions) => {
          if (err) return;
          if (!user) {
            return res.redirect("/login");
          }
          req.logIn(user, (err) => {
            if (err) {
              return next(err);
            }
            req.flash("success", { msg: "Success! You are logged in." });
            res.redirect(req.session.returnTo || "/");
          });
        } */
      );
    } catch (err) {
      console.log("signin error!");
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
