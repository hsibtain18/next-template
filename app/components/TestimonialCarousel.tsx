"use client"; // If you're using this in app directory (Next.js 13+)

import { Swiper, SwiperSlide } from "swiper/react";
import {   Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { workJSON } from "../common/Constant";
import StarsDisplay from "./starsDisplay";

const TestimonialCarousel = () => {
  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
      },
      991: {
        slidesPerView: 2,
        
      },
      
    },
  };

  return (
    <section className="work-carousel metro position-re">
      <div className="container-fluid overflow-visible">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <Swiper {...swiperOptions} className="swiper-wrapper overflow-visible">
                {workJSON.map((slide) => (
                  <SwiperSlide key={slide.id} className="swiper-slide">
                    <div className="block-sec p-3  content wow noraidus fadeInUp">
                      <div className="testim-box ">
                        <div className="head-box">
                          <h6>Our Clients</h6>
                          <h4>What Client&apos;s Say?</h4>
                        </div>
                        <p>{slide.testimonial}</p>
                        <div className="cont">
                          <StarsDisplay rating={slide.rating} maxStars={5} />
                          <h6 className="color-font">{slide.position}</h6>
                          <h4>{slide.name}</h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
