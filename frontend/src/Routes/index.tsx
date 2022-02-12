import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DetailPage, MainPage, ChatPage, AboutPage } from '../Page';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/post/:postId' element={<DetailPage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
