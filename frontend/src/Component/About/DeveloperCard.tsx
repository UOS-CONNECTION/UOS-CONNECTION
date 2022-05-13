import { Box, Card, CardMedia, Typography, Chip } from '@mui/material';
import { IDeveloper } from '../../Util/Type';

interface IDeveloperCard {
  user: IDeveloper;
}

const DeveloperCard: React.FC<IDeveloperCard> = ({ user }: IDeveloperCard) => {
  return (
    <Card className='developer-card-container'>
      <CardMedia
        className='developer-image'
        component='img'
        image={user.img}
        alt='user-image'
      />
      <Box className='developer-content'>
        <Typography className='developer-card-name'>{user.name}</Typography>
        <Box className='developer-label-container'>
          {user.stack.map((label, idx) => (
            <Chip
              key={idx}
              className={`developer-label ${label === 'FE' ? 'yellow' : 'red'}`}
              label={label}
            />
          ))}
        </Box>
        <Typography className='developer-short-desc'>
          {user.short_desc}
        </Typography>
      </Box>
    </Card>
  );
};

export default DeveloperCard;
