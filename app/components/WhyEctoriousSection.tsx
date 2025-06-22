"use client";

import Image from "next/image";
import SimpleParallax from "simple-parallax-js";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function WhyEctoriousSection() {
const featRef = useRef<HTMLUListElement>(null);

useEffect(() => {
  if (!featRef.current) return;

  const ctx = gsap.context(() => {
    gsap.from(featRef.current?.children, {
      scrollTrigger: {
        trigger: featRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.3,
      ease: "power2.out",
    });
  }, featRef);

  return () => ctx.revert();
}, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <SimpleParallax>
                <Image
                  className="thumparallax-down"
                  src="/min-area.webp"
                  alt="Why Ectorious"
                  width={600}
                  height={400}
                  priority
                />
              </SimpleParallax>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">Why ECTORIOUS?</h4>
              <p className="wow txt" data-splitting>
                Our creative Ad agency is ranked among the finest in the US. We
                cultivate smart ideas for start-ups and seasoned players.
              </p>
              <ul className="feat"  ref={featRef}>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Mission
                  </h6>
                  <p>
                    To empower businesses with innovative Amazon solutions that
                    deliver sustainable growth and a competitive edge in the
                    e-commerce landscape.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Goals
                  </h6>
                  <p>
                    To be the trusted leader in Amazon consulting by
                    consistently exceeding expectations and setting new
                    standards of excellence.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Our Values
                  </h6>
                  <p>
                    Innovation means redefining success with creative solutions,
                    while transparency ensures clear communication and honest
                    practices. Commitment focuses on delivering impactful
                    results, and collaboration fosters trust and mutual growth.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
