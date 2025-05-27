"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination,    Parallax } from "swiper/modules";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "@deemlol/next-icons";
// import { useTheme } from "next-themes";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/facebook";
import "react-social-icons/linkedin";
import "react-social-icons/instagram";
import ParticlesComponent from "./Particles";
import { useEffect } from "react";
import fadeWhenScroll from '@/app/common/fadeWhenScroll'
import removeSlashFromBagination from '@/app/common/removeSlashpagination'
export default function LandingSwiper() {
  //   const { theme } = useTheme();
  useEffect(() => {
    const handle = setTimeout(() => {
      try {
        fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
        removeSlashFromBagination();
      } catch (err) {
        console.error("Error in custom scripts", err);
      }
    }, 1500);
  
    return () => clearTimeout(handle);
  }, []);
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
    <header className="slider slider-prlx relative fisxed-slider w-full  overflow-hidden text-center"  style={{ height: '100vh' }}>
        <ParticlesComponent />
      <div className="swiper-container parallax-slider">
        <Swiper
          modules={[Parallax, Navigation, Pagination,Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          speed={1500}
          parallax={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            clickable: true,
            type: "fraction",
            el: ".swiper-pagination",
          }}
          className="  swiper-wrapper"
        >
          {introData.map((item) => (
            <SwiperSlide key={item.title} className="w-full swiper-slide">
              <div  data-overlay-dark="2" className="sm:px-5 text-2xl flex items-center justify-center  w-full h-full  min-h-screen bg-img valign dotAnimation ">
                <div className="caption center lg:w-1/2 sm:w-full">
                  <h1 className="color-font">{item.title}</h1>
                  <p className="mb-20">{item.content}</p>
                  <Link href={item.route} className="butn bord curve mt-[50px]">
                    {" "}
                    Load More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="setone setwo">
          <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer text-[var(----color-value)]">
            {/* <i className="fas fa-chevron-right"></i> */}
            <ChevronRight size={20} />
          </div>
          <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
            {/* <i className="fas fa-chevron-left"></i> */}
            <ChevronLeft size={20} />
          </div>
        </div>
        <div className={`swiper-pagination top botm `}></div>
        {/* color={theme !== 'dark'? '#FFFFFF' :'#000000'} */}
        <div className="social-icon">
          <SocialIcon
            url="www.facebook.com"
            bgColor="transparent"
            href="https://www.facebook.com/share/1DpZghiiTp/?mibextid=wwXIfr"
            style={{
              height: 40,
              width: 40,
            }}
          />
          <SocialIcon
            url="www.linkedin.com"
            bgColor="transparent"
            style={{
              height: 40,
              width: 40,
            }}
          />
          <SocialIcon
            url="www.instagram.com"
            bgColor="transparent"
            href="https://www.instagram.com/ectorious.official/"
            style={{
              height: 40,
              width: 40,
            }}
          />
        </div>
      </div>
      <div className="circle-color">
        {" "}
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      </div>
    </header>
   
  );
}
