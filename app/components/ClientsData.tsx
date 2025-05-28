"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { clientsData } from "../common/Constant";
import SplittingText from "./SplittingWraper";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
const ClientsSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const firstHalfRefs = useRef<HTMLDivElement[]>([]);
  const secondHalfRefs = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    setMounted(true);
    gsap.from([firstHalfRefs.current, secondHalfRefs.current], {
      scrollTrigger: {
        trigger: firstHalfRefs.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 5,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);
  const setFirstRef = (el: HTMLDivElement | null, index: number) => {
    if (el) firstHalfRefs.current[index] = el;
  };

  const setSecondRef = (el: HTMLDivElement | null, index: number) => {
    if (el) secondHalfRefs.current[index] = el;
  };
  // Wait until the theme is available (mounted on client)
  if (!mounted) return null;
  const firstHalf = clientsData.slice(0, clientsData.length / 2);
  const secondHalf = clientsData.slice(4);
  if (!theme) {
    return;
  }

  return (
    <section className="clients section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign md-mb50">
            <div className="sec-head mb-0">
              <h6 className="wow fadeIn" data-wow-delay=".3s">
                Best Features
              </h6>
              <h3 className="wow mb-20 color-font">Our Clients</h3>
              <SplittingText>
                <p>
                  Ectorious stands as the preferred partner for industry
                  leaders, driven by trust, excellence, and a powerful network
                  of successful collaborators.
                </p>
              </SplittingText>
            </div>
          </div>

          <div className="col-lg-8">
            <div>
              <div className="row bord">
                {firstHalf.map((item, index) => (
                  <div
                    className="col-md-3 col-6 brands"
                    key={item.id}
                    ref={(el) => setFirstRef(el, index)}
                  >
                    <div className="item wow fadeIn">
                      <div className="img">
                        <div className="svgContainer">
                          <Image
                            src={
                              theme === "light"
                                ? item.lightImage
                                : item.darkImage
                            }
                            alt="client image"
                            width={100}
                            height={50}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row">
                {secondHalf.map((item, index) => (
                  <div
                    key={item.id}
                    ref={(el) => setSecondRef(el, index)}
                    className={`col-md-3 col-6 brands ${
                      [5, 6].includes(item.id) ? "sm-mb30" : ""
                    }`}
                  >
                    <div className="item wow fadeIn">
                      <div className="img">
                        <div className="svgContainer">
                          <Image
                            src={
                              theme === "light"
                                ? item.lightImage
                                : item.darkImage
                            }
                            alt="client image"
                            width={100}
                            height={50}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
