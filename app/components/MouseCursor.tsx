"use client"; // only needed in app directory (Next 13+ with Server Components)

import { useEffect } from "react";
import mouseEffect from "@/app/common/cursorEffect";
import { usePathname } from "next/navigation";
export default function MouseCursor() {
  const pathname = usePathname();

  useEffect(() => {
    mouseEffect();
  }, [pathname]);

  return (
    <div className="d-none d-lg-block">
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </div>
  );
}
