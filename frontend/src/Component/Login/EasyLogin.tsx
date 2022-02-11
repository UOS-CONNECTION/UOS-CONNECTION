import { Avatar } from "@mui/material";

const EasyLogin: React.FC = () => {
  return (
    <div className="easylogin-container">
      <h3 className="easylogin-title">SNS 계정으로 간편 로그인/회원가입</h3>
      <div className="icons-container">
        <Avatar
          className="easylogin-icon"
          alt="Google"
          src={`/img/google.ico`}
        />
        <Avatar className="easylogin-icon" alt="Naver" src={`/img/naver.ico`} />
        <Avatar className="easylogin-icon" alt="Kakao" src={`/img/kakao.svg`} />
      </div>
    </div>
  );
};

export default EasyLogin;
