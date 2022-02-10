import { Box, Tab, Tabs } from '@mui/material';
import { useCallback, useState } from 'react';
import { SHARE_INFO } from '../../Util/Constant';
import { IData } from '../../Util/Type';
import ShareCard from './ShareCard';

interface IShareTab {
  talentData: IData[],
}

const ShareTab: React.FC<IShareTab> = ({ talentData }) => {
  const [option, setOption] = useState<number>(0);

  const handleOptionChange = useCallback(
    (e: React.SyntheticEvent, nextOption: number) => {
      setOption(nextOption);
    },
    []
  );

  return (
    <Box className='share-tab-container'>
      <Tabs value={option} onChange={handleOptionChange}>
        <Tab label='재능공유' />
        <Tab label='물품공유' />
      </Tabs>
      {option === SHARE_INFO.TALENT &&
        talentData.map((data, idx) => <ShareCard key={idx} data={data} />)}
      {option === SHARE_INFO.ITEM &&
        talentData.map((data, idx) => <ShareCard key={idx} data={data} />)}
    </Box>
  );
};

export default ShareTab;
