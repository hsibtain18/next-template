"use client";
import { useEffect, useRef} from "react";

const works = {
  title: "Amazing Works",
  description:
    "Creativity involves breaking out of expected & repeatable patterns in order to look at things in a different way than ever before.",
};
export default function WorksHeader() {
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
                <h1 className="color-font">{works.title}</h1>
                {works.description && <p>{works.description}</p>}
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
