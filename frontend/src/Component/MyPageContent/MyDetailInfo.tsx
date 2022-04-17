import { Box, Tabs, Tab } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { useState } from 'react';

import TabPanel from './TabPanel';
import DetailMyInfo from './DetailMyInfo';
import DetailMyWrite from './DetailMyWrite';

const MyDetailInfo: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box className='detail-info-container'>
      <Box className='detail-tab-bar'>
        <Tabs value={value} onChange={handleChange} className='detail-tabs'>
          <Tab value={0} label='내 정보' />
          <Tab value={1} label='작성한 글' />
        </Tabs>
      </Box>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
        className='detail-contents'
      >
        <TabPanel value={value} index={0}>
          <DetailMyInfo />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DetailMyWrite />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

export default MyDetailInfo;
