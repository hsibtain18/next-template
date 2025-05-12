"use client"; // only needed in app directory (Next 13+ with Server Components)

import { useEffect } from "react";
import scrollToTop from "@/app/common/scrollToTop"
export default function ScrollToTopButton() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="progress-wrap cursor-pointer">
      <svg
        className="progress-circle svg-content"
        width="44px"
        height="44px"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
}