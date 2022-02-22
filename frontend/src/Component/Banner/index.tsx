import { useState } from 'react';
import BannerSlider from './BannerSlider';
import * as faker from 'faker';

const MainBanner: React.FC = () => {
  const [banner, setBanner] = useState<string[]>([
    faker.image.image(),
    faker.image.image(),
    faker.image.image(),
    faker.image.image(),
    faker.image.image(),
    faker.image.image(),
  ]);

  return (
    <div className='main-banner'>
      <BannerSlider banner={banner} />
    </div>
  );
};

export default MainBanner;
