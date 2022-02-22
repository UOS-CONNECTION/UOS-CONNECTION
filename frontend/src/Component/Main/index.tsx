import { useState } from 'react';
import { TempData } from '../../Util/TempData';
import { IData } from '../../Util/Type';
import Filter from './Filter';
import ShareTab from './ShareTab';

const Main: React.FC = () => {
  const [talentData] = useState<IData[]>(TempData);
  const [locationOption, setLocationOption] = useState<string>('');
  const [tagOption, setTagOption] = useState<[]>([]);
  const [mannerOption, setMannerOption] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');

  return (
    <div className='main-container'>
      <ShareTab talentData={talentData} />
      <Filter
        locationOption={locationOption}
        setLocationOption={setLocationOption}
        tagOption={tagOption}
        setTagOption={setTagOption}
        mannerOption={mannerOption}
        setMannerOption={setMannerOption}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
    </div>
  );
};

export default Main;
