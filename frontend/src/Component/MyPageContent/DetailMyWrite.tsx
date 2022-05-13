import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useCallback, useLayoutEffect, useState } from 'react';

import ShareCard from '../Main/ShareCard';
import { IData } from '../../Util/Type';
import { getAllPost } from '../../Store/Action/postAction';

const DetailMyWrite: React.FC = () => {
  const [talentData, setTalentData] = useState<IData[]>([]);

  const dispatch = useDispatch();

  const setInitialPosts = useCallback(async () => {
    const res = await dispatch(getAllPost({ limit: 1, offset: 1 }));
    if (res.payload.status === 200) {
      setTalentData(res.payload.data);
    }
  }, [dispatch]);

  useLayoutEffect(() => {
    setInitialPosts();
  }, [dispatch, setInitialPosts]);

  return (
    <Box className='detail-mywrite'>
      <Box className='mywrite-container'>
        {talentData.map((data, idx) => (
          <ShareCard data={data} key={idx} />
        ))}
      </Box>
    </Box>
  );
};

export default DetailMyWrite;
