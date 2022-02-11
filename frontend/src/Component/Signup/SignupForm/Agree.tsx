import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";

const Agree: React.FC = () => {
  return (
    <div
      className="agree-container"
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
      <div className="agree-title">약관동의</div>
      <Box
        className="agree-box"
        sx={{
          display: "flex",
          flexDirection: "column",
          border: 1,
          borderRadius: "5px",
          borderColor: "rgb(200,200,200)",
        }}
      >
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="전체 동의" />
          <Divider sx={{ width: 1, mt: 1, mb: 1 }} />
          <FormControlLabel control={<Checkbox />} label="만 14세 이상" />
          <FormControlLabel
            control={<Checkbox />}
            label="개인정보 수집 및 이용 동의"
          />
        </FormGroup>
      </Box>
    </div>
  );
};

export default Agree;
