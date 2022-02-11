import { Grid, Link } from "@mui/material";

const TwoLink: React.FC = () => {
  return (
    <div className="twolink-container">
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            비밀번호 재설정
          </Link>
        </Grid>
        <Grid item>
          <Link href="/signup" variant="body2">
            회원가입
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default TwoLink;
