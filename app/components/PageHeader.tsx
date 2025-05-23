"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface PagesHeaderProps {
  imageLink: string;
  children: ReactNode;
}

export default function PagesHeader({ imageLink, children }: PagesHeaderProps) {
  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-span-10">
            <div className="cont  text-center">
              <h1 className="color-font font-bold">
                {children}
              </h1>
            </div>
          </div>
          <div className="lg:col-span-10">
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
