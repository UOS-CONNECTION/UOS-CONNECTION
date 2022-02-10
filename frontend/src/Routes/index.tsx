import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage, ChatPage } from '../Page';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/chat' element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
