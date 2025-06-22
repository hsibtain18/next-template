"use client";

 
import { useTheme } from "next-themes";
import { testimonialSection } from "../common/Constant";
import StarDisplay from "./starsDisplay";
import { useEffect, useState } from "react";
 import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".testim-box").forEach((box: any, i) => {
        gsap.from(box, {
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section   ref={sectionRef}  className="testimonials section-padding position-re">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h2 className="wow fadeIn color-font" data-wow-delay=".2s">
                Testimonials
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container" >
        <div className="row wow fadeInUp" data-wow-delay=".3s">
          {testimonialSection.map((slide) => (
            <div
              key={slide.id}
              className="col-12 col-sm-12 col-md-12 col-lg-6 mb-20"
            >
              <div
                className="block-sec p-3 content wow noraidus fadeInUp"
                data-wow-delay=".2s"
              >
                <div
                  className={`testim-box testimonials-section relative  mb-0 ${
                    theme === "light" ? "testim-box-light" : ""
                  }`}  
                >
                  <div className="head-box">
                    <h6 className="wow fadeIn" data-wow-delay=".3s">
                      Our Clients
                    </h6>
                    <h4 className="wow fadeInLeft" data-wow-delay=".3s">
                      What Client&apos;s Say?
                    </h4>
                  </div>
                  <p>{slide.testimonial}</p>
                  <div className="bottom-fixed">
                    <StarDisplay rating={slide.rating} maxStars={5} />
                    <div className="cont">
                      <h6 className="color-font">{slide.position}</h6>
                      <h4 className={theme === "light" ? "light" : ""}>{slide.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
