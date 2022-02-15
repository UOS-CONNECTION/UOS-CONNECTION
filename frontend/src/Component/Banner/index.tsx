import { useState } from 'react';
import BannerSlider from './BannerSlider';

const MainBanner: React.FC = () => {
  const [banner, setBanner] = useState<string[]>([
    '/logo512.png',
    '/logo512.png',
    '/logo512.png',
    '/logo512.png',
    '/logo512.png',
    '/logo512.png',
  ]);

  return (
    <div className='main-banner'>
      <BannerSlider _banner={banner} children={''} />
    </div>
  );
};

export default MainBanner;
