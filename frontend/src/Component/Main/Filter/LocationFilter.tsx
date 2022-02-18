import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useCallback } from "react";

interface ILocationFilter {
  locationOption: string;
  setLocationOption: Function;
}

const LocationFilter: React.FC<ILocationFilter> = ({
  locationOption,
  setLocationOption,
}) => {
  const handleLocationOptionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocationOption((e.target as HTMLInputElement).value);
    },
    [setLocationOption]
  );

  return (
    <Box className="filter-option-container">
      <Typography className="filter-option-title">위치</Typography>
      <RadioGroup
        className="filter-radio-group"
        row
        value={locationOption}
        onChange={handleLocationOptionChange}
      >
        <FormControlLabel value={1} control={<Radio />} label="정문" />
        <FormControlLabel value={2} control={<Radio />} label="후문" />
        <FormControlLabel value={3} control={<Radio />} label="전체" />
      </RadioGroup>
    </Box>
  );
};

export default LocationFilter;
