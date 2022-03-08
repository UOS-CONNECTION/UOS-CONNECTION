import { Avatar, Box, Card, CardMedia, Chip, Typography } from '@mui/material';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectOnePost } from '../../Store/Action/postAction';
import { IData } from '../../Util/Type';

interface IShareCard {
  data: IData;
}

const ShareCard: React.FC<IShareCard> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoDetailPage = useCallback(() => {
    dispatch(selectOnePost(data));
    navigate(`/post/${data.id}`);
  }, [data, dispatch, navigate]);

  return (
    <Card className='share-card-container' onClick={handleGoDetailPage}>
      <Box className='card-main-image'>
        <CardMedia
          className='card-img'
          component='img'
          image={data.img}
          alt='user-image'
        />
      </Box>
      <Box className='card-content-container'>
        <Typography>{data.title}</Typography>
        <Box className='card-label-container'>
          {data.label.map((label, idx) => (
            <Chip key={idx} className='card-label' label={label} />
          ))}
        </Box>
      </Box>
      <Box className='card-user-container'>
        <Avatar alt='user' src={data.User.img} />
        <Typography>{data.User.name}</Typography>
      </Box>
    </Card>
  );
};

export default ShareCard;
