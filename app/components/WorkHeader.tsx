// "use client";
// import { useEffect, useRef } from "react";

// interface PagesHeaderProps {
//   url?: string;
// }

// export default function WorksHeader({ url }: PagesHeaderProps) {
//   const works = [
//     {
//       id: "eem",
//       title: "Amazon Account Management",
//       description:
//         "Experience effortless Amazon operations with our hands-on account management solutions. We ensure your account remains healthy, compliant, and optimized for success.",
//     },
//     {
//       id: "ppc",
//       title: "Advertising & PPC ",
//       title2: "  Management",
//       description:
//         "Master the art of Amazon advertising with our PPC services. We blend cutting-edge analytics with creative strategies to help you outshine competitors.",
//     },
//     {
//       id: "cbm",
//       title: "Creative & Branding Services",
//       description:
//         "Your brand is more than a logo; it’s a promise to your customers. We’ll help you create a compelling presence that captivates and converts.",
//     },
//     {
//       id: "testimonials",
//       title: "Testimonials",
//       description: "",
//     },
//   ];

//   const work2 = {
//     title: "Amazing Works",
//     title2:'',
//     description:
//       "Creativity involves breaking out of expected & repeatable patterns in order to look at things in a different way than ever before.",
//   };

//   const fixedSliderRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (fixedSliderRef.current) {
//       const mainContent = document.querySelector(
//         ".main-content"
//       ) as HTMLElement;
//       const slideHeight = fixedSliderRef.current.offsetHeight;
//       if (mainContent) {
//         mainContent.style.marginTop = `${slideHeight}px`;
//         document.documentElement.style.setProperty(
//           "--header-height",
//           `${slideHeight}px`
//         );
//       }
//     }
//   }, []);
//   const isSingleWork =
//     typeof url !== "undefined" &&
//     works.find((w) => w.id === url) !== undefined;

//   const displayWorkDescription = isSingleWork
//     ? works.find((w) => w.id === url)!
//     : work2;

//   return (
//     <header
//       ref={fixedSliderRef}
//       className="works-header fixed-slider hfixd valign sub-bg"
//     >
//       <div className="container">
//         <div className="row justify-center">
//           <div className="col-lg-8 col-md-9 static">
//             <div className="capt mt-[50px]">
//               <div className="parlx text-center">
//                 <h1 className="color-font">{displayWorkDescription.title}</h1>
//                 {displayWorkDescription.title &&
//                   <h1 className="color-font">{displayWorkDescription.title2}</h1>

//                 }
//                 {displayWorkDescription.description && (
//                   <p>{displayWorkDescription.description}</p>
//                 )}
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PagesHeaderProps {
  url?: string;
}

export default function WorksHeader({ url }: PagesHeaderProps) {
  const works = [
    {
      id: "eem",
      title: "Amazon Account Management",
      description:
        "Experience effortless Amazon operations with our hands-on account management solutions. We ensure your account remains healthy, compliant, and optimized for success.",
    },
    {
      id: "ppc",
      title: "Advertising & PPC ",
      title2: "  Management",
      description:
        "Master the art of Amazon advertising with our PPC services. We blend cutting-edge analytics with creative strategies to help you outshine competitors.",
    },
    {
      id: "cbm",
      title: "Creative & Branding Services",
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
    title2: "",
    description:
      "Creativity involves breaking out of expected & repeatable patterns in order to look at things in a different way than ever before.",
  };

  const fixedSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Adjust main content spacing
    if (fixedSliderRef.current) {
      const mainContent = document.querySelector(".main-content") as HTMLElement;
      const slideHeight = fixedSliderRef.current.offsetHeight;
      if (mainContent) {
        mainContent.style.marginTop = `${slideHeight}px`;
        document.documentElement.style.setProperty("--header-height", `${slideHeight}px`);
      }
    }

    // GSAP animation
    const ctx = gsap.context(() => {
      gsap.from(".parlx h1", {
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: "bounce.out",
        stagger: 0.2,
      });

      gsap.from(".parlx p", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });
    }, fixedSliderRef);

    return () => ctx.revert();
  }, []);

  const isSingleWork = typeof url !== "undefined" && works.find((w) => w.id === url);
  const displayWorkDescription = isSingleWork ? works.find((w) => w.id === url)! : work2;

  return (
    <header ref={fixedSliderRef} className="works-header fixed-slider hfixd valign sub-bg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8 col-md-9 static">
            <div className="capt mt-[50px]">
              <div className="parlx text-center">
                <h1 className="color-font">{displayWorkDescription.title}</h1>
                {displayWorkDescription.title2 && (
                  <h1 className="color-font">{displayWorkDescription.title2}</h1>
                )}
                {displayWorkDescription.description && (
                  <p>{displayWorkDescription.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
