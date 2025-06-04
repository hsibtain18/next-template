"use client";
import { useRef, useEffect } from "react"; 
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

export default function NewsTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const animateText = async () => {
      const { SplitText } = await import('gsap/SplitText');
      gsap.registerPlugin(SplitText);

      if (tickerRef.current) {
        const split1 = new SplitText(tickerRef.current, { type: 'chars' });
        gsap.from(split1.chars, {
          scrollTrigger: {
            trigger: tickerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          y: 20,
          stagger: 0.03,
          duration: 5,
          ease: 'power2.out',
        });
      }
 
    };

    animateText();
  }, []);
 

  return (
    <div className="block fixed top-0 left-0 w-full ticker-bar text-center py-2 overflow-hidden z-50 shadow-md">
      <div className="whitespace-nowrap h-[35px]  "  >
        
        <span  ref={tickerRef} className="  tracking-wide w-100 text-sm">
          Want a Free Audit?
        </span> 
      </div>
    </div>
  );
}
