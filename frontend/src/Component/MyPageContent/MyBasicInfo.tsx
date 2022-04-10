import { Avatar, Box, TextField, Typography, Button } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const MyBasicInfo: React.FC = () => {
  return (
    <Box className='basic-info-container'>
      <Box className='user-img-container'>
        <Avatar alt='user img' src='' className='info-user-img' />
      </Box>
      <Box className='basic-info'>
        <Box className='user-name-container'>
          <Typography variant='h5' className='user-name'>
            지빈
          </Typography>
          <ModeEditOutlineOutlinedIcon className='edit-btn' />
        </Box>
        <Box className='description-container'>
          <TextField fullWidth multiline />
          <Button variant='outlined' className='edit-btn'>
            수정
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MyBasicInfo;
