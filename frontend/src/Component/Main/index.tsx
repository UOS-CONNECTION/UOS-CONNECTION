import { useCallback, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPost } from '../../Store/Action/postAction';
import requestAPI from '../../Util/Request';
import { TempData } from '../../Util/TempData';
import { IData } from '../../Util/Type';
import Filter from './Filter';
import ShareTab from './ShareTab';

const Main: React.FC = () => {
  const [talentData, setTalentData] = useState<IData[]>([]);
  const [locationOption, setLocationOption] = useState<string>('');
  const [tagOption, setTagOption] = useState<[]>([]);
  const [mannerOption, setMannerOption] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');

  const dispatch = useDispatch();

  const setInitialPosts = useCallback(async () => {
    const res = await dispatch(getAllPost());
    if (res.payload.status === 200) {
      setTalentData(res.payload.data);
    }
  }, [dispatch]);

  useLayoutEffect(() => {
    setInitialPosts();
  }, [dispatch, setInitialPosts]);

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
