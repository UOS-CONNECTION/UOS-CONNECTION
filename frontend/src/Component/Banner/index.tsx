import { useState } from 'react';
import * as faker from 'faker';
import BannerSlider from './BannerSlider';

const MainBanner: React.FC = () => {
  const [banner] = useState<string[]>([
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
