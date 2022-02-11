import { Box, Avatar, Typography } from "@mui/material";

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="Logo"
          src={`/img/logo.svg`}
          sx={{ width: 60, height: 60 }}
        />
        <Typography component="h1" variant="h5">
          시대이음
        </Typography>
      </Box>
    </div>
  );
};

export default Logo;
