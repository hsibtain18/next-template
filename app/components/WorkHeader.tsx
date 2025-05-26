"use client";
import { useEffect, useRef } from "react";

interface PagesHeaderProps {
  url?: string;
}

export default function WorksHeader({ url }: PagesHeaderProps) {
  const works = [
    {
      id: "aam",
      title: "Amazon Account Management",
      description:
        "Experience effortless Amazon operations with our hands-on account management solutions. We ensure your account remains healthy, compliant, and optimized for success.",
    },
    {
      id: "ppc",
      title: "PPC Management",
      description:
        "Master the art of Amazon advertising with our PPC services. We blend cutting-edge analytics with creative strategies to help you outshine competitors.",
    },
    {
      id: "bm",
      title: "Brand Management",
      description:
        "Your brand is more than a logo; it’s a promise to your customers. We’ll help you create a compelling presence that captivates and converts.",
    },
    {
      id: "testimonials",
      title: "Testimonials",
      description: "",
    },
  ];

  const work2 = {
    title: "Amazing Works",
    description:
      "Creativity involves breaking out of expected & repeatable patterns in order to look at things in a different way than ever before.",
  };

  const fixedSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fixedSliderRef.current) {
      const mainContent = document.querySelector(
        ".main-content"
      ) as HTMLElement;
      const slideHeight = fixedSliderRef.current.offsetHeight;
      if (mainContent) {
        mainContent.style.marginTop = `${slideHeight}px`;
        document.documentElement.style.setProperty(
          "--header-height",
          `${slideHeight}px`
        );
      }
    }
  }, []); 
  const isSingleWork =
    typeof url !== "undefined" &&
    works.find((w) => w.id === url) !== undefined;

  const displayWorkDescription = isSingleWork
    ? works.find((w) => w.id === url)!
    : work2;

  return (
    <header
      ref={fixedSliderRef}
      className="works-header fixed-slider hfixd valign sub-bg"
    >
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-7 col-md-9 static">
            <div className="capt mt-[50px]">
              <div className="parlx text-center">
                <h1 className="color-font">{displayWorkDescription.title}</h1>
                {displayWorkDescription.description && (
                  <p>{displayWorkDescription.description}</p>
                )}
              </div>
              <div className="bactxt custom-font valign">
                <span className="full-width">Works</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}