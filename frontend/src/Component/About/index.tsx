import { Box, Typography } from '@mui/material';
import Developer from '../../Util/Developer';
import Description from './Description';
import DeveloperCard from './DeveloperCard';

const About: React.FC = () => {
  return (
    <section className='about-container'>
      <Description />
      <Typography variant='h5' className='developer-title'>
        만든이
      </Typography>
      <Box className='developer-cards'>
        {Developer.map((user) => (
          <DeveloperCard key={user.id} user={user} />
        ))}
      </Box>
    </section>
  );
};

export default About;
