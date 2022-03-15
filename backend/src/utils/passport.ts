import UserEntity from "@src/entities/user.entity";
import UserRepository from "@src/repositories/user.repository";
import passport from "passport";
import passportLocal from "passport-local";
import { getCustomRepository } from "typeorm";

const LocalStrategy = passportLocal.Strategy;

interface LocalFields {
  usernameField: string;
  passwordField: string;
}

class PassportAPI {
  localLogin(fields: LocalFields) {
    passport.use(
      new LocalStrategy(fields, async (email, password, done) => {
        try {
          const userRepository = getCustomRepository(UserRepository);
          const existedUser = await userRepository.findByEmail(email);
          if (!existedUser) {
            done(null, null, { message: "Cannot find User" });
          }
          if (existedUser.password !== password) {
            done(null, null, { message: "Incorrect password" });
          }

          // success
          done(null, existedUser, {
            message: `[Passport] Login Success with ${existedUser.email}`,
          });
        } catch (error) {
          console.error(error);
          done(error);
        }
      })
    );
  }
  localAuthenticate() {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
    });
  }
}

export default new PassportAPI();
