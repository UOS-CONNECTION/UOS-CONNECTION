import { Avatar, Typography } from "@mui/material";

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <Avatar alt="Logo" src={`/img/logo.svg`} sx={{ width: 60, height: 60 }} />
      <Typography component="h1" variant="h5">
        시대이음
      </Typography>
    </div>
  );
};

export default Logo;
