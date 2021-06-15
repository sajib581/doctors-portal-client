import React from 'react';
import SwiperCore, { EffectFade } from 'swiper';
import 'swiper/components/effect-fade/effect-fade.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';


SwiperCore.use([EffectFade]);

export default () => {
  return (
    <Swiper effect="fade">
      {[1, 2, 3].map((i, el) => {
        return <SwiperSlide>Slide {el}</SwiperSlide>;
      })}
    </Swiper>
  );
};