'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { clientsData } from '../common/Constant';
import SplittingText from './SplittingWraper';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ClientsSection = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logosRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        logosRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 4,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: logosRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const firstHalf = clientsData.slice(0, clientsData.length / 2);
  const secondHalf = clientsData.slice(clientsData.length / 2);

  return (
    <section className="clients section-padding" ref={sectionRef}>
      <div className="container">
        <div className="row">
          {/* Section Heading */}
          <div className="col-lg-4 valign md-mb50">
            <div className="sec-head mb-0">
              <h6 className="wow fadeIn" data-wow-delay=".3s">
                Best Features
              </h6>
              <h3 className="wow mb-20 color-font">Our Clients</h3>
              <SplittingText>
                <p>
                  Ectorious stands as the preferred partner for industry leaders, driven by trust,
                  excellence, and a powerful network of successful collaborators.
                </p>
              </SplittingText>
            </div>
          </div>

          {/* Logos Section */}
          <div className="col-lg-8" ref={logosRef}>
            {/* First Row */}
            <div className="row bord">
              {firstHalf.map((item) => (
                <div key={item.id} className="col-md-3 col-6 brands">
                  <div className="item">
                    <div className="img">
                      <div className="svgContainer">
                        <Image
                          src={theme === 'light' ? item.lightImage : item.darkImage}
                          alt="client logo"
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

            {/* Second Row */}
            <div className="row">
              {secondHalf.map((item) => (
                <div
                  key={item.id}
                  className={`col-md-3 col-6 brands ${
                    [5, 6].includes(item.id) ? 'sm-mb30' : ''
                  }`}
                >
                  <div className="item">
                    <div className="img">
                      <div className="svgContainer">
                        <Image
                          src={theme === 'light' ? item.lightImage : item.darkImage}
                          alt="client logo"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
