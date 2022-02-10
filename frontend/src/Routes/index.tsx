import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from '../Page';
import ChatPage from '../Page/ChatPage';

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