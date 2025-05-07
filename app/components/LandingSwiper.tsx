"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function LandingSwiper() {
  const introData = [
    {
      id: 1,
      title: "Amazon Account Management",
      content:
        "Streamline your Amazon operations with expert account management for optimal health, compliance, and success.",
      route: "/services/aam/",
    },
    {
      id: 2,
      title: "PPC Management",
      content:
        " Elevate your Amazon advertising with data-driven PPC strategies that outperform competitors.",
      route: "/services/ppc/",
    },
    {
      id: 3,
      title: "Brand Management",
      content:
        "Build a captivating brand presence that resonates with customers and drives conversions.",
      route: "/services/bm/",
    },
  ];

  return (
    <header className="slider slider-prlx fixed-slider text-center">
      <div className="swiper-container parallax-slider">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          speed={1000}
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
          {introData.map((item) => (
            <SwiperSlide key={item.title} className="w-full">
              <div className="circle-color">
                <div className="gradient-circle"></div>
                <div className="gradient-circle two"></div>
              </div>
              <div className="text-2xl text-white flex justify-center   min-h-screen ">
                {item.title}
              </div>
            </SwiperSlide>
          ))}
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
