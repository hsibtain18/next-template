"use client";
import React from "react";

import { useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import Image from "next/image";
import CountUp from "react-countup";
import Link from "next/link";
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
    image: "/homeAbout.webp",
    status: [
      { id: 1, number: "72", letter: "+", statusName: "Happy Clients" },
      { id: 2, number: "90", letter: "+", statusName: "Success Projects" },
    ],
  };
  return (
    <section className="container mx-auto px-4 about-us">
      <div className="flex flex-col md:flex-row gap-4 h-full ">
        <div className="w-full md:w-1/3 overflow-hidden h-[600px]">
          <div className="mb-50">
            <h6 className="fw-100 text-u ls10 mb-10">{aboutData.smallTitle}</h6>
            <h3 className="fw-600 text-u ls1 mb-30 color-font">
              {aboutData.title}
            </h3>
            {/* <p>{aboutData.content}</p> */}
            <p className=" mt-10 h-[250px]" ref={textRef}>
              {/* Loading... */}
            </p>
         
            <Link  href={'/aboutus'} className="butn bord curve mt-30"><span>Read More</span></Link>  
          </div>
        </div>
        <div className="w-full md:w-2/3 h-[500px] img">
          <div className="dull-image">
            <img
              src={aboutData.image}
              className="object-cover"
              alt={aboutData.title}
            />
          </div>
          <div className="stauts">
            {aboutData.status.map((item) => (
              <div className="item" key={item.id}>
                <h4 className="font-extrabold">
                  {" "}
                  <CountUp
                    className="mr-0.5"
                    end={+item.number}
                    start={0}
                    duration={5}
                  />
                  <span>{item.letter}</span>
                </h4>
                <h6>{item.statusName}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
