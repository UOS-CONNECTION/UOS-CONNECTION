import { getCustomRepository } from 'typeorm';
import UserRepository from '@src/repositories/user.repository';
import passport from 'passport';

const KakaoStrategy = require('passport-kakao').Strategy;

class kakaoAPI {
  kakaoLogin() {
    passport.use(
      new KakaoStrategy(
        {
          clientID: process.env.KAKAO_KEY, // 카카오 로그인에서 발급받은 REST API 키
          callbackURL: '/auth/kakao/callback', // 카카오 로그인 Redirect URI 경로
        },
        /*
        clientID에 카카오 앱 아이디 추가
        callbackURL: 카카오 로그인 후 카카오가 결과를 전송해줄 URL
        accessToken, refreshToken: 로그인 성공 후 카카오가 보내준 토큰
        profile: 카카오가 보내준 유저 정보. profile의 정보를 바탕으로 회원가입
        */
        async (accessToken, refreshToken, profile, done) => {
          console.log('kakao profile: ', profile);
          try {
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
          }
        }
      )
    );
  }
}

export default new kakaoAPI();
