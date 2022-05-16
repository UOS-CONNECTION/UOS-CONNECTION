import { useCallback, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPost } from '../../Store/Action/postAction';
import { IData } from '../../Types/Type';
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
    const res = await dispatch(getAllPost({ limit: 3, offset: 0 }));

    if (res.payload.status === 200) {
      const posts = res.payload.data.data as IData[];
      setTalentData(posts);
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
