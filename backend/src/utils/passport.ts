import passport from 'passport';
import { Strategy } from 'passport-local';
import { getCustomRepository } from 'typeorm';

import cryptoAPI from './crypto';
import UserRepository from '@src/db/repositories/user.repository';

class passportAPI {
  config() {
    this.observerKakaoLogin();
    this.observerKakaoLogin();
  }
  observerLocalLogin() {
    passport.use(
      'local',
      new Strategy(
        {
          usernameField: 'email',
          passwordField: 'password',
        },
        async (email, password, done) => {
          try {
            // const userRepository = getCustomRepository(UserRepository);
            // const user = await userRepository.findByEmail(email);
            const user = {
              email: 'sangmin',
              password:
                'def1f709c553feec997195ef5f1015d4f89786defaf849dd15e4a2dc0d062f56',
            };

            // database에 유저가 없는 경우
            if (!user) {
              return done(null, null, { message: 'email is wrong' });
            }

            // 유저 비밀번호가 틀린 경우
            const hashedPassword = await cryptoAPI.getHashedPassword(password);
            if (user.password !== hashedPassword) {
              return done(null, null, {
                message: 'password is wrong',
              });
            }

            // 유저 정보 반환
            return done(null, user, { message: 'user find' });
          } catch (err) {
            console.error(`[Passport] ${err}`);
            return done(err);
          }
        }
      )
    );
  }

  observerKakaoLogin() {}
}

export default new passportAPI();
