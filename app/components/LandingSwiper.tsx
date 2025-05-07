'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function LandingSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}">${index + 1}</span>`;
        },
      }}
      autoplay={{ delay: 3000 }}
      loop
      className="min-h-screen "
    >
      <SwiperSlide className=" bg-amber-200 min-h-screen ">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-green-200 flex items-center justify-center text-xl min-h-screen">Slide 2</SwiperSlide>
      <SwiperSlide className="bg-blue-200 flex items-center justify-center text-xl min-h-screen">Slide 3</SwiperSlide>
    </Swiper>
  );
}
