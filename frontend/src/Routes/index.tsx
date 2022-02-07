import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from '../Page';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
