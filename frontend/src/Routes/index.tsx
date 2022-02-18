import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailPage, MainPage, ChatPage, LoginPage, SignupPage } from "../Page";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="post/:postId" element={<DetailPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
