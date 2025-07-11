"use client";
import Link from "next/link";
import React from "react";

const MobileFooter = () => {
  return (
    <div className="mobile-footer block md:hidden">
      <Link href="'/calender'"  className="btn inline-block w-[75%]">
        Want a Free Audit ?
      </Link>
    </div>
  );
};

export default MobileFooter;
