import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DetailPage, MainPage } from '../Page';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='post/:postId' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
