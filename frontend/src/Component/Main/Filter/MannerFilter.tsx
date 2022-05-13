import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useCallback } from 'react';

interface IMannerFilter {
  mannerOption: string;
  setMannerOption: Function;
}

const MannerFilter: React.FC<IMannerFilter> = ({
  mannerOption,
  setMannerOption,
}: IMannerFilter) => {
  const handleMannerOptionChange = useCallback(
    (e: SelectChangeEvent) => {
      setMannerOption(e.target.value);
    },
    [setMannerOption],
  );

  return (
    <FormControl className='filter-manner-container' variant='standard'>
      <Typography className='filter-option-title'>매너점수</Typography>
      <Box className='filter-manner-option'>
        <Select
          value={mannerOption}
          onChange={handleMannerOptionChange}
          className='filter-manner'
        >
          <MenuItem value={0}>1.0</MenuItem>
          <MenuItem value={1}>1.5</MenuItem>
          <MenuItem value={2}>2.0</MenuItem>
          <MenuItem value={3}>2.5</MenuItem>
          <MenuItem value={4}>3.0</MenuItem>
          <MenuItem value={5}>3.5</MenuItem>
          <MenuItem value={6}>4.0</MenuItem>
          <MenuItem value={7}>4.5</MenuItem>
        </Select>
        <span style={{ marginLeft: '3%' }}>이상</span>
      </Box>
    </FormControl>
  );
};

export default MannerFilter;
