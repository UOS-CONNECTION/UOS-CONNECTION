import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { useCallback } from 'react';

interface ISortFilter {
  sortOption: string;
  setSortOption: Function;
}

const SortFilter: React.FC<ISortFilter> = ({
  sortOption,
  setSortOption,
}: ISortFilter) => {
  const handleSortOptionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSortOption((e.target as HTMLInputElement).value);
    },
    [setSortOption],
  );

  return (
    <Box className='filter-option-container'>
      <Typography className='filter-option-title'>정렬기준</Typography>
      <RadioGroup
        className='filter-radio-group'
        row
        value={sortOption}
        onChange={handleSortOptionChange}
      >
        <FormControlLabel value={1} control={<Radio />} label='인기순' />
        <FormControlLabel value={2} control={<Radio />} label='최신순' />
      </RadioGroup>
    </Box>
  );
};

export default SortFilter;
