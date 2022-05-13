import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

interface BannerProps {
  banner: string[];
}

const BannerSlider: React.FC<BannerProps> = ({ banner }: BannerProps) => {
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);
  return (
    <Swiper
      navigation
      scrollbar
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {banner?.map((bannerSrc, idx) => (
        <SwiperSlide key={idx}>
          <img src={bannerSrc} alt='banner' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
