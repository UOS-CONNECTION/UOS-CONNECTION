import passport from 'passport';
import { Strategy } from 'passport-local';
import KakaoStrategy from 'passport-kakao';

import { getCustomRepository } from 'typeorm';

import cryptoAPI from './crypto';
import UserRepository from '@src/db/repositories/user.repository';

class passportAPI {
  config() {
    this.observerKakaoLogin();
    this.observerKakaoLogin();
  }

  private observerLocalLogin() {
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

  private observerKakaoLogin() {
    passport.use(
      'login-kakao',
      new KakaoStrategy(
        {
          clientID: process.env.KAKAO_KEY, // 카카오 로그인에서 발급받은 REST API 키
          callbackURL: 'http://localhost:8080/api/user/kakao/callback', // kakao-developer에 등록한 카카오 로그인 Redirect URI 경로
        },
        /*
        clientID에 카카오 앱 아이디 추가
        callbackURL: 카카오 로그인 후 카카오가 결과를 전송해줄 URL
        accessToken, refreshToken: 로그인 성공 후 카카오가 보내준 토큰
        profile: 카카오가 보내준 유저 정보. profile의 정보를 바탕으로 회원가입
        */
        async (accessToken, refreshToken, profile, done) => {
          console.log('Access token: ', accessToken);
          console.log('Kakao profile: ', profile);

          /* try {
            const userRepository = getCustomRepository(UserRepository);
            const existedUser = await userRepository.findByEmail(profile.id);

            if (existedUser) {
              // 이미 가입된 카카오 프로필이면 로그인 인증 완료
              done(null, existedUser);
            } else {
              // 가입되지 않는 유저면 회원가입시키고 로그인을 시킨다
              //const newUser = ...
              //done(null, newUser);
            }
          } catch (error) {
            console.error(error);
            done(error);
          } */
        }
      )
    );
  }
}

export default new passportAPI();
