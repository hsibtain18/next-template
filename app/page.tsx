"use client";
import {   useEffect, useRef } from "react";
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

export default function Home() {
  const fixedSliderRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fixedSliderRef.current && mainContentRef.current) {
      const slideHeight = fixedSliderRef.current.offsetHeight;
      mainContentRef.current.style.marginTop = `${slideHeight}px`;
    }
  }, []);



  return (
    <div className=" font-[family-name:var(--font-poppins)]">
      <div ref={fixedSliderRef}> 
        <LandingSwiper />{" "}
        {/*  this div is getting in the background and below div is getting over this div   */}
      </div>
      
      <div className="flex flex-col gap-10"  ref={mainContentRef}>
        <AboutUs />
        <SubHeaderFeature />
        <TestimonialSub />
        <TestimonialCarousel />
        <FunFacts />
        <ClientTestimonials />
        <ClientsSection />
        <CallToAction />
      </div>
    </div>
  );
}
