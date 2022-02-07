import { AppBar, Box, Input, Link, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface IUserNavigtaion {
  isLogin: boolean;
}

const Logo: React.FC = () => {
  return (
    <div className="header-logo">
      <img src={`/img/logo_long.png`} alt=""></img>
    </div>
  );
};

const GNBNavigation: React.FC = () => {
  return (
    <Box className="gnb-container">
      <Link href="#" color="inherit" underline="none">
        물품공유
      </Link>
      <Link href="#" color="inherit" underline="none">
        재능공유
      </Link>
      <Link href="#" color="inherit" underline="none">
        채팅
      </Link>
    </Box>
  );
};

const UserNavigation: React.FC<IUserNavigtaion> = ({ isLogin }) => {
  return (
    <Box className="user-navigation-container">
      {!isLogin && (
        <Link href="/" color="inherit" underline="none">
          로그인
        </Link>
      )}
      {!isLogin && (
        <Link href="#" color="inherit" underline="none">
          회원가입
        </Link>
      )}
      <Link href="#" color="inherit" underline="none">
        고객센터
      </Link>
      {isLogin && (
        <Link href="/" color="inherit" underline="none">
          마이페이지
        </Link>
      )}
    </Box>
  );
};

const SearchBar: React.FC = () => {
  return (
    <Box className="search-container">
      <Box className="search-container">
        <SearchIcon className="search-icon"></SearchIcon>
        <Input className="search-input" placeholder="Search.." />
      </Box>
    </Box>
  );
};
const isLogin = false;
const Header: React.FC = () => {
  return (
    <Box className="header-container">
      <AppBar position="static">
        <Toolbar>
          <Logo />
          <GNBNavigation />
          <Box className="right-container">
            <UserNavigation isLogin={isLogin} />
            <SearchBar />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
