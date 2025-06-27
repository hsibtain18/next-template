"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "@deemlol/next-icons";
// import { useTheme } from "next-themes";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/facebook";
import "react-social-icons/linkedin";
import "react-social-icons/instagram";
import ParticlesComponent from "./Particles";
import { useEffect } from "react";
import fadeWhenScroll from "@/app/common/fadeWhenScroll";
import removeSlashFromBagination from "@/app/common/removeSlashpagination";
export default function LandingSwiper({ onReady }: { onReady?: () => void }) {
  //   const { theme } = useTheme();
  interface temp {
    id: number;
    title: string;
    title2?: string;
    content: string;
    route: string;
  }
  useEffect(() => {
    const handle = setTimeout(() => {
      try {
        fadeWhenScroll(document.querySelectorAll(".fixed-slider"));
        removeSlashFromBagination();
      } catch (err) {
        console.error("Error in custom scripts", err);
      }
    }, 100);

    return () => clearTimeout(handle);
  }, []);
  const introData: temp[] = [
    {
      id: 1,
      title: "Amazon Account",
      title2: "Management",
      content:
        "Streamline your Amazon operations with expert account management for optimal health, compliance, and success.",
      route: "/services/eem/",
    },
    {
      id: 2,
      title: "Advertising & PPC",
      title2: "Management",
      content:
        " Elevate your Amazon advertising with data-driven PPC strategies that outperform competitors.",
      route: "/services/ppc/",
    },
    {
      id: 3,
      title: "Creative & Branding ",
      title2: "Services",
      content:
        "Build a captivating brand presence that resonates with customers and drives conversions.",
      route: "/services/cbm/",
    },
  ];

  return (
    <header className="slider slider-prlx relative fixed-slider w-full  overflow-hidden text-center">
      <ParticlesComponent />
      <div className="swiper-container parallax-slider">
        <Swiper
          modules={[Parallax, Navigation, Pagination ,Autoplay]}
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
          onSwiper={() => {
            if (onReady) onReady();
          }}
        >
          {introData.map((item) => (
            <SwiperSlide key={item.title} className="w-full swiper-slide">
              <div className="container">
                <div
                  
                  className="sm:px-5 text-2xl flex items-center justify-center  w-full h-full  min-h-screen bg-img valign dotAnimation "
                >
                  <div className="caption center mt-30">
                    <h1 className="color-font">{item.title}</h1>
                    {item.title2 && (
                      <h1 className="color-font">{item.title2}</h1>
                    )}
                    <p className="mb-20">{item.content}</p>
                    <Link
                      href={item.route}
                      className="butn bord curve mt-[50px] inline-block"
                    >
                      Load More
                    </Link>
                  </div>
                </div>
                <div className="circle-color">
                  {" "}
                  <div className="gradient-circle"></div>
                  <div className="gradient-circle two"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="setone setwo">
          <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer text-[var(----color-value)]">
            <ChevronRight size={20} />
          </div>
          <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer  text-[var(----color-value)]">
            <ChevronLeft size={20} />
          </div>
        </div>
        <div className={`swiper-pagination top botm `}></div>
        {/* color={theme !== 'dark'? '#FFFFFF' :'#000000'} */}
        <div className="social-icon">
          <SocialIcon
            url="www.facebook.com"
            target="_blank"
            bgColor="transparent"
            href="https://www.facebook.com/share/1DpZghiiTp/?mibextid=wwXIfr"
            style={{
              height: 40,
              width: 40,
            }}
            className="social-icon-a"
          />
          <SocialIcon
            url="www.linkedin.com"
            bgColor="transparent"
            href="https://www.linkedin.com/company/ectorious/"
            target="_blank"
            style={{
              height: 40,
              width: 40,
            }}
            className="social-icon-a"
          />
          <SocialIcon
            url="www.instagram.com"
            target="_blank"
            bgColor="transparent"
            href="https://www.instagram.com/ectorious.official/"
            style={{
              height: 40,
              width: 40,
            }}
            className="social-icon-a"
          />
        </div>
      </div>
    </header>
  );
}
