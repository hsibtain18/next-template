"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
import { useRouter } from 'next/navigation';
gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

export default function NewsTicker() {
    const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const goToAbout = () => {
    router.push('/calender'); // navigates to /about
  };
  const tickerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const animateText = async () => {
      setMounted(true)
      const { SplitText } = await import("gsap/SplitText");
      gsap.registerPlugin(SplitText);

      if (tickerRef.current) {
        const split1 = new SplitText(tickerRef.current, { type: "chars" });
        gsap.from(split1.chars, {
          scrollTrigger: {
            trigger: tickerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
          opacity: 0,
          y: 20,
          stagger: 0.03,
          duration: 5,
          ease: "power2.out",
        });
      }
    };

    animateText();
  }, []);

  if(!mounted) return ;

  return (
    <div className="block fixed top-0 left-0 w-full ticker-bar text-center py-2 overflow-hidden z-[5000] shadow-md" onClick={goToAbout} >
      <div className="whitespace-nowrap h-[35px]  flex justify-center content-center items-center">
        <span
          ref={tickerRef}
          className="  tracking-wide w-100 text-sm flex item"
        >
          <svg
            width="35"
            height="25"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline mx-2"
          >
            <path
              d="M19.0001 8.76176C19.0001 12.8343 17.5376 16.1193 15.7151 16.1193C13.8926 16.1193 12.4751 12.8343 12.4526 8.76176C12.4526 4.68925 13.9151 1.42675 15.7376 1.42675C17.5151 1.40425 18.9776 4.71175 19.0001 8.76176Z"
              stroke="#161718"
               
            />
            <path
              d="M5.90501 11.6197H3.8575C2.26 11.6197 1 10.3372 1 8.76217C1 7.16466 2.2825 5.90466 3.8575 5.90466H5.90501V11.6197Z"
              stroke="#161718"
               
            />
            <path
              d="M14.9049 15.872L5.90494 11.6195L5.92744 5.90445L14.9049 1.65195"
              stroke="#161718"
               
            />
            <path
              d="M4.68985 17.0418C4.01485 17.0418 3.47485 16.4793 3.47485 15.8268V11.6193H5.92736V15.8268C5.90486 16.4793 5.34236 17.0418 4.68985 17.0418Z"
              stroke="#161718" 
            />
          </svg>
          Want a Free Audit?
        </span>
      </div>
    </div>
  );
}
