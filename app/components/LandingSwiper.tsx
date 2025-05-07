"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

 

export default function LandingSwiper() {
    
  return (
    <header  className="slider slider-prlx fixed-slider text-center">
    <div className="swiper-container parallax-slider">
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      pagination={{
        clickable: true,
        type: "fraction",
        el: ".swiper-pagination",
      }}
      className="min-h-screen "
    >
      <SwiperSlide>
        <div className="text-2xl text-white flex justify-center  min-h-screen ">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-2xl text-white flex justify-center   min-h-screen ">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-2xl text-white flex justify-center   min-h-screen ">Slide 3</div>
      </SwiperSlide>
    </Swiper>
    </div>
    </header>
    // <Swiper
    //   modules={[Navigation, Pagination, Autoplay]}
    //   navigation={{
    //     prevEl: ".swiper-button-prev",
    //     nextEl: ".swiper-button-next",
    //   }}
    //   pagination={{
    //     type: "fraction",
    //     clickable: true,
    //     el: ".swiper-pagination",
    //   }}
    //   autoplay={{ delay: 3000 }}
    //   loop
    //   className="min-h-screen "
    // >
    //   <SwiperSlide className=" bg-amber-200 min-h-screen ">Slide 1</SwiperSlide>
    //   <SwiperSlide className="bg-green-200 flex items-center justify-center text-xl min-h-screen">
    //     Slide 2
    //   </SwiperSlide>
    //   <SwiperSlide className="bg-blue-200 flex items-center justify-center text-xl min-h-screen">
    //     Slide 3
    //   </SwiperSlide>
    // </Swiper>
  );
}
