import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  DetailPage,
  MainPage,
  ChatPage,
  LoginPage,
  SignupPage,
  AboutPage,
  Mypage,
  PostWritePage,
  KakaoCallbackPage,
} from '../Page';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='post/:postId' element={<DetailPage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/write' element={<PostWritePage />} />
        <Route path='/oauth/kakao/callback' element={<KakaoCallbackPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
