import { Button, Card } from '@mui/material';
import LocationFilter from './LocationFilter';
import MannerFilter from './MannerFilter';
import SortFilter from './SortFilter';
import TagFilter from './TagFilter';

interface IFilter {
  locationOption: string;
  setLocationOption: Function;
  tagOption: string[];
  setTagOption: Function;
  mannerOption: string;
  setMannerOption: Function;
  sortOption: string;
  setSortOption: Function;
}

const Filter: React.FC<IFilter> = ({
  locationOption,
  setLocationOption,
  tagOption,
  setTagOption,
  mannerOption,
  setMannerOption,
  sortOption,
  setSortOption,
}) => {
  return (
    <Card className='filter-container'>
      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />
      <LocationFilter
        locationOption={locationOption}
        setLocationOption={setLocationOption}
      />
      <TagFilter tagOption={tagOption} setTagOption={setTagOption} />
      <MannerFilter
        mannerOption={mannerOption}
        setMannerOption={setMannerOption}
      />
      <Button variant='contained' className='filter-btn'>필터 적용하기</Button>
    </Card>
  );
};

export default Filter;
