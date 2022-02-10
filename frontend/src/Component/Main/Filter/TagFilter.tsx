import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useCallback } from 'react';

interface IMannerFilter {
  tagOption: string[];
  setTagOption: Function;
}

const TagFilter: React.FC<IMannerFilter> = ({ tagOption, setTagOption }) => {
  const handleTagOptionChange = useCallback(
    (e: SelectChangeEvent) => {
      setTagOption(e.target.value);
    },
    [setTagOption]
  );

  return (
    <FormControl className='filter-option-container' variant='standard'>
      <Typography className='filter-option-title'>태그</Typography>
      <RadioGroup
        className='filter-radio-group'
        row
        value={tagOption}
        onChange={handleTagOptionChange}

      >
        <FormControlLabel value={1} control={<Radio />} label='자취방' />
        <FormControlLabel value={2} control={<Radio />} label='바퀴벌레' />
        <FormControlLabel value={3} control={<Radio />} label='요리' />
        <FormControlLabel value={4} control={<Radio />} label='초콜릿' />
        <FormControlLabel value={5} control={<Radio />} label='시립대' />
        <FormControlLabel value={6} control={<Radio />} label='배고프다' />
      </RadioGroup>
    </FormControl>
  );
};

export default TagFilter;
