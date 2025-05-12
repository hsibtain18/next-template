"use client";
import React from "react";

import { useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);
const AboutUs = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        duration: 15,
        scrambleText: {
          text: aboutData.content,
          chars: "upperCase",
        },
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // when top of element hits 80% of viewport
          toggleActions: "play none none none",
          once: true, // only once
        },
      });
    }
  }, []);
  const aboutData = {
    id: 1,
    smallTitle: "About Us",
    title: "Our Comapny",
    content:
      "At Ectorious, we’re driven by a single mission: to unlock the full potential of your brand on Amazon. We specialize in elevating Amazon stores through expert PPC Management, Brand Management, and Account Optimization, delivering measurable results that boost sales, visibility, and profitability.",
    image: "/img/homeAbout.webp",
    status: [
      { id: 1, number: "72", letter: "+", statusName: "Happy Clients" },
      { id: 2, number: "90", letter: "+", statusName: "Success Projects" },
    ],
  };
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-4 h-full ">
        <div className="w-full md:w-1/2 overflow-hidden h-[500px]">
          <div className="mb-50">
            <h6 className="fw-100 text-u ls10 mb-10">{aboutData.smallTitle}</h6>
            <h3 className="fw-600 text-u ls1 mb-30 color-font">
              {aboutData.title}
            </h3>
            {/* <p>{aboutData.content}</p> */}
            <p className=" mt-10" ref={textRef}>
              {/* Loading... */}
            </p>
            {/* <!-- <NuxtLink to="#" className="butn bord curve mt-30">
              <span>Read More</span>
            </NuxtLink> -->
            <NuxtLink :to="aboutRoute" className="butn bord curve mt-30"><span>Read More</span></NuxtLink> */}
          </div>
        </div>
       <div className="w-full md:w-1/2 h-[500px]">
                    <p>advava</p>
       </div>
      </div>
    </section>
  );
};

export default AboutUs;
