"use client";
import { useEffect, useRef, useState } from "react";
import AboutUs from "./components/Aboutus";
import CallToAction from "./components/CallToAction";
import ClientsSection from "./components/ClientsData";
import FunFacts from "./components/FunFacts";
import LandingSwiper from "./components/LandingSwiper";
// import ParticlesComponent from "./components/Particles";
import SubHeaderFeature from "./components/SubHeaderFeature";
import TestimonialCarousel from "./components/TestimonialCarousel";
import TestimonialSub from "./components/TestimonialSub";
import ClientTestimonials from "./components/TestimonialVideo";

import Footer from "./components/Footer";

export default function Home() {
  const fixedSliderRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const [isSliderReady, setIsSliderReady] = useState(false);

  useEffect(() => {
    if (isSliderReady && fixedSliderRef.current && mainContentRef.current) {
      // const height = fixedSliderRef.current.offsetHeight;
      // mainContentRef.current.style.marginTop = `${height}px`;
    }
    window.scrollTo({ top: 100, behavior: "smooth" });

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 150);
  }, [isSliderReady]);

  return (
    <div>
      <div className="h-[100vh]" ref={fixedSliderRef}>
        <LandingSwiper onReady={() => setIsSliderReady(true)} />{" "}
        {/*  this div is getting in the background and below div is getting over this div   */}
      </div>
      {/* <FullScreenLoader /> */}
      <div className="flex flex-col gap-14   pt-[100hv]" ref={mainContentRef}>
        <AboutUs />
        <SubHeaderFeature />
        <TestimonialSub />
        <TestimonialCarousel />
        <FunFacts />
        <ClientTestimonials />
        <ClientsSection />
        <div className="flex flex-col gap-0">
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  );
}
