"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function NewsTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const width = tickerRef.current?.scrollWidth || 0;
      gsap.fromTo(
        tickerRef.current,
        { x: 0 },
        {
          x: -width / 2,
          duration: 60,
          ease: "linear",
          repeat: -1,
        }
      );
    }, tickerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="hidden md:block fixed top-0 left-0 w-full ticker-bar text-center py-2 overflow-hidden z-50 shadow-md">
      <div className="whitespace-nowrap h-[35px]  "  >
        <span className=" font-semibold uppercase tracking-wide w-100 text-sm">
           Want a meeting?
        </span>
      </div>
    </div>
  );
}
