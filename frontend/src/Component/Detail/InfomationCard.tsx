import React, { useState } from 'react';
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InboxIcon from '@mui/icons-material/Inbox';
import { IInfomation } from '../../Types/Type';
import { BASIC_INFO_TYPE, EXTRA_INFO_TYPE } from '../../Util/Constant';

interface IInfomationCard {
  basicInfoList: IInfomation[];
  extraInfoList: IInfomation[];
}

interface IInfomationComponent {
  infoList: IInfomation[];
  dense: boolean;
  title: string;
}

interface IListItem {
  type: number;
  info: string;
}

const CustomListItem: React.FC<IListItem> = ({ type, info }) => {
  return (
    <ListItem>
      <ListItemIcon>
        {type === BASIC_INFO_TYPE.CERTIFICATION && <MilitaryTechIcon />}
        {type === BASIC_INFO_TYPE.GIVE && <EmojiEventsIcon />}
        {type === BASIC_INFO_TYPE.LOCATION && <LocationOnIcon />}
        {type === BASIC_INFO_TYPE.TIME && <AccessTimeFilledIcon />}
        {type === EXTRA_INFO_TYPE.CAREER && <ApartmentIcon />}
        {type === EXTRA_INFO_TYPE.NONE && <InboxIcon />}
      </ListItemIcon>
      <ListItemText primary={info} />
    </ListItem>
  );
};

const InfomationComponent: React.FC<IInfomationComponent> = ({
  dense,
  infoList,
  title,
}: IInfomationComponent) => {
  return (
    <Box className='infomation-container'>
      <Typography variant='h5'>{title}</Typography>
      <Divider sx={{ marginTop: '5%' }} />
      <Grid item xs={12} md={6} className='infomation-grid'>
        <List dense={dense}>
          {infoList.map((item) => (
            <CustomListItem key={item.id} type={item.type} info={item.info} />
          ))}
        </List>
      </Grid>
    </Box>
  );
};

const InfomationCard: React.FC<IInfomationCard> = ({
  basicInfoList,
  extraInfoList,
}) => {
  const [dense] = useState<boolean>(false);

  return (
    <List className='infomation-card-container'>
      <InfomationComponent
        title='기본 정보'
        dense={dense}
        infoList={basicInfoList}
      />
      <InfomationComponent
        title='추가 정보'
        dense={dense}
        infoList={extraInfoList}
      />
    </List>
  );
};

export default InfomationCard;
