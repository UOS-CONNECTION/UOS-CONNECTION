import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

const Agree: React.FC = () => {
  return (
    <div className="input-container">
      <div className="input-title">약관동의</div>
      <div className="agree-box">
        <FormGroup>
          <FormControlLabel
            id="agree-all"
            control={<Checkbox />}
            label="전체 동의"
          />
          <FormControlLabel control={<Checkbox />} label="만 14세 이상" />
          <FormControlLabel
            control={<Checkbox />}
            label="개인정보 수집 및 이용 동의"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Agree;
