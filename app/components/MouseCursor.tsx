"use client"; // only needed in app directory (Next 13+ with Server Components)

import { useEffect } from "react";
import mouseEffect from "@/app/common/cursorEffect";
export default function MouseCursor() {
  useEffect(() => {
    mouseEffect();
  }, []);

  return (
    <div className="d-none d-lg-block">
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </div>
  );
}
