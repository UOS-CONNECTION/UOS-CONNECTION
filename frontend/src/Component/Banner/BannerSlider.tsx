import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

interface BannerProps {
  children: ReactNode;
  _banner: string[];
}

const BannerSlider = ({ children, _banner }: BannerProps) => {
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);
  return (
    <Swiper
      navigation={true}
      scrollbar={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {_banner?.map((bannerSrc, idx) => (
        <SwiperSlide key={idx}>
          <img src={bannerSrc} alt='banner' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
