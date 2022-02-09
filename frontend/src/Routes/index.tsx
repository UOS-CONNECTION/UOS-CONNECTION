import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../Page/MainPage";
import LoginPage from "../Page/LoginPage";
import SignupPage from "../Page/SignupPage";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
