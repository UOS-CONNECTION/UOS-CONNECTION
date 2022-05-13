import { Avatar, Box, TextField, Typography, Button } from '@mui/material';
import { useState } from 'react';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const MyBasicInfo: React.FC = () => {
  const [isNameClicked, setIsNameClicked] = useState<Boolean>(false);
  const [isDscClicked, setIsDscClicked] = useState<Boolean>(false);
  const [, setIsImgClicked] = useState<Boolean>(false);

  const handleImgClick = () => {
    setIsImgClicked((prev) => !prev);
  };
  const handleNameClick = () => {
    setIsNameClicked((prev) => !prev);
  };
  const handleDSCClick = () => {
    setIsDscClicked((prev) => !prev);
  };

  return (
    <Box className='basic-info-container'>
      <Box className='user-img-container'>
        <Avatar
          alt='user img'
          src=''
          className='info-user-img'
          onClick={handleImgClick}
        />
        <SettingsOutlinedIcon
          className='user-img-edit-btn'
          onClick={handleImgClick}
        />
      </Box>
      <Box className='basic-info'>
        <Box className='user-name-container'>
          {isNameClicked ? (
            <TextField
              variant='standard'
              placeholder='지함'
              size='small'
              className='user-name-input'
            />
          ) : (
            <Typography variant='h5' className='user-name'>
              지함
            </Typography>
          )}

          <ModeEditOutlineOutlinedIcon
            className='edit-btn'
            onClick={handleNameClick}
          />
        </Box>
        <Box className='description-container'>
          {isDscClicked ? (
            <TextField
              fullWidth
              multiline
              maxRows={3}
              placeholder='This is self-description.'
            />
          ) : (
            <Typography className='user-dsc'>
              This is self-description.~~~~~~~~~~~~~~~
            </Typography>
          )}
          <Button
            variant='outlined'
            className='edit-btn'
            onClick={handleDSCClick}
          >
            수정
          </Button>
        </Box>
      </Box>
      {/* modal */}
    </Box>
  );
};

export default MyBasicInfo;
