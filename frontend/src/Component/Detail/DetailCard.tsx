import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Rating,
  Typography,
} from '@mui/material';
import { IData } from '../../Util/Type';

interface IDetailCard {
  post: IData;
}

interface IUserInfo {
  userImg: string;
  userName: string;
  short_desc: string;
  score: number;
}

const UserInfo: React.FC<IUserInfo> = ({
  userImg,
  score,
  userName,
  short_desc,
}) => {
  return (
    <Box className='detail-user-info'>
      <Box className='user-avatar'>
        <Avatar alt='user' src={userImg} className='user-img' />
        <Typography>{userName}</Typography>
      </Box>
      <Box className='detail-user-description'>
        <Box className='detail-user-score'>
          <Typography className='user-score'>{score.toFixed(1)}</Typography>
          <Rating className='user-star-score' value={score} readOnly />
        </Box>
        <Typography className='user-short_desc'>{short_desc}</Typography>
      </Box>
    </Box>
  );
};

const DetailCard: React.FC<IDetailCard> = ({ post }) => {
  return (
    <Card className='detail-card-container'>
      <Box className='detail-main-image'>
        <CardMedia
          className='card-img'
          component='img'
          image={post.img}
          alt='user-image'
        />
        <Box className='card-label-container'>
          {post.label.map((label, idx) => (
            <Chip key={idx} className='card-label' label={label} />
          ))}
        </Box>
      </Box>
      <Box className='detail-content-container'>
        <Typography className='post-title'>{post.title}</Typography>
        <UserInfo
          short_desc={post.User.short_desc}
          userImg={post.User.img}
          userName={post.User.name}
          score={post.User.score}
        />
        <Typography className='post-desc'>{post.desc}</Typography>
        <Button variant='contained' className='ask-btn'>
          문의하러 가기
        </Button>
      </Box>
    </Card>
  );
};

export default DetailCard;
