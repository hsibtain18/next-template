"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";
import gsap from 'gsap';
// import SplittingText from "./SplittingWraper";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
interface PagesHeaderProps {
  imageLink: string;
  children: ReactNode;
}

export default function PagesHeader({ imageLink, children }: PagesHeaderProps) {
  const paragraphRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
  if (!paragraphRef.current) return;

  gsap.from(paragraphRef.current, {
    scrollTrigger: {
      trigger: paragraphRef.current,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.in',
  });
}, []);
  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-10">
            <div className="cont  text-center" ref={paragraphRef} >
              {/* <SplittingText> */}
                <h1 className="color-font font-bold px-[20px]">{children}</h1>
              {/* </SplittingText> */}
            </div>
          </div>
          <div className="col-lg-10">
            <div className="img dull-image">
              <Image
                src={imageLink}
                alt="Header Image"
                width={1200}
                height={600}
                className="img-fluid rounded"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  );
}
