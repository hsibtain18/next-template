"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
interface Props {
  url?: string;
}
interface SelectedWorkDetails {
  description: string;
  description2: string;
  mobile: string;
  expertiseIncludes: string[];
  keyBenefits: string[];
}

interface SelectedWork {
  id: string;
  title: string;
  image: string;
  isFilter: string;
  details: SelectedWorkDetails;
}
const MiddleSectionService = ({ url }: Props) => {
  const { theme } = useTheme();
const expertiseRef = useRef<HTMLDivElement | null>(null);
const benefitsRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
  const ctx = gsap.context(() => {
    gsap.fromTo(
      expertiseRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: expertiseRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      benefitsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
      }
    );
  });

  return () => ctx.revert();
}, []);
  const details = [
    {
      id: "eem",
      image: "/services/aam.webp",
      title: "Amazon Account Management",
      isFilter: "aam",

      details: {
        description:
          "Navigating the complexities of Amazon's marketplace can be overwhelming. From limited customer data and rising advertising costs to intricate logistics and the constant battle for competitive search rankings — the hurdles are real. At ECTORIOUS, we turn these challenges into growth opportunities. Our comprehensive Amazon Account Management services are designed to simplify your journey and maximize your potential.",
        description2:
          "Our seasoned experts optimize every facet of your Amazon presence — from strategic advertising and creative content to detailed account oversight. We handle everything: product listing optimization, inventory management, advertising campaigns, and performance monitoring. We know how much your brand means to you, and we’re committed to elevating it. With our tailored strategies and unwavering support, you'll not only navigate the Amazon ecosystem — you'll thrive in it. Partner with us and experience the power of true expertise and passion.",
        mobile:
          "ECTORIOUS transforms Amazon selling challenges into growth opportunities through expert account management, advertising, and optimization. We help your brand thrive with tailored strategies, creative content, and end-to-end support for lasting marketplace success.",

        expertiseIncludes: [
          "Comprehensive catalog management to ensure accurate and organized product listings.",
          "Strategic inventory planning to maintain optimal stock levels and meet customer demand.",
          "Targeted advertising campaigns to enhance product visibility and drive sales growth.",
          "In-depth performance analysis to provide actionable insights for business optimization.",
          "Continuous account monitoring to ensure compliance with Amazon's policies and guidelines.",
        ],
        keyBenefits: [
          "We provide detailed analytics and strategic planning to drive informed decisions and foster business growth",
          "Regular, insightful reporting and transparent communication keep clients informed and aligned with their objectives.",
          "Our tailored growth strategies and dedicated support consistently meet and exceed clients' business expectations",
        ],
      },
    },
    {
      id: "ppc",
      title: "Advertising & PPC Management",
      image: "/services/ppc.webp",
      isFilter: "ppc",
      details: {
        description:
          "In the ever-evolving Amazon landscape, advertising is no longer optional; it is essential. Strategic advertising serves as the backbone of sustainable growth. At ECTORIOUS, our Advertising & PPC Management service is designed to deliver performance-driven results through a combination of strategic planning, real-time optimization, and in-depth analytics. We don’t just manage campaigns; we engineer them.",
        description2:
          "From the setup of Sponsored Products, Sponsored Brands, and Sponsored Display to granular bid adjustments and keyword targeting, our approach is holistic and data-informed. We monitor ACoS, TACoS, conversion rates, and trends to ensure every dollar contributes to growth. With transparency, continuous testing, and tailored strategies, ECTORIOUS becomes an extension of your team to deliver long-term advertising success.",
        mobile:
          "We don’t just run Amazon ads — we engineer data-driven PPC campaigns tailored for visibility, efficiency, and profitability.",
        expertiseIncludes: [
          "Fully customized PPC campaign structures tailored to your catalog and goals",
          "Continuous bid optimization and keyword refinement for peak performance",
          "Sponsored Ads (Products, Brands, Display) strategy and execution",
          "Advanced data analysis using sponsored reports and market insights",
          "Real-time ACoS, TACoS, and ROI monitoring with strategic adjustments",
        ],
        keyBenefits: [
          "Enhanced ad performance through targeting, bidding, and optimization for maximum efficiency",
          "Data-driven decisions supported by in-depth analytics and actionable real-time performance insights",
          "Transparent reporting that keeps your team aligned with objectives and campaign performance",
        ],
      },
    },
    {
      id: "cbm",
      image: "/services/bm.webp",
      title: "Creative & Branding Services",
      isFilter: "brand",
      details: {
        description:
          "First impressions matter. On Amazon, where buyers make decisions in seconds, strong visual storytelling and compelling content are essential to stand out. At ECTORIOUS, our Creative & Branding Services are designed to elevate your brand and enhance conversion through strategic, high-impact content. We specialize in crafting product listings that not only look great but also perform.",
        description2:
          "From optimized titles and bullet points to high-resolution images, A+ Content, and storefronts, every element is crafted to reflect your brand and appeal to your audience. Our team aligns creative assets with SEO and buyer behavior insights to drive trust and clicks. Whether launching or refreshing, we deliver data-backed creativity that boosts engagement and sales.",
        mobile:
          "Captivate Amazon shoppers with creative content that builds trust, communicates value, and turns clicks into conversions.",
        expertiseIncludes: [
          "Optimized product listings with compelling titles, bullet points, and keyword-rich descriptions",
          "High-quality listing images including lifestyle, infographics, and packaging representation",
          "Professional product video creation designed to increase engagement and conversion rates",
          "A+ Content and Brand Story development that builds trust and enhances brand identity",
          "Storefront design and creative strategy aligned with Amazon SEO and buyer behavior insights",
        ],
        keyBenefits: [
          "High-performing visuals and content crafted to boost engagement, trust, and conversions",
          "On-brand presentation across listings and storefronts for a strong and cohesive identity",
          "Creative decisions informed by data, trends, and customer behavior for maximum impact",
        ],
      },
    },
  ];
  const selectedWork: SelectedWork | undefined = details.find(
    (w) => w.id === url
  );
  if (!selectedWork || !theme) {
    return null; // or some loading / fallback UI
  }
  if(!mounted){
  return null;
}

  return (
    <section className="container py-5 service">
      {/* Top Section */}
      <div className="row align-items-center mb-5">
        <div className="col-12 justify-content-center mb-5 text-center">
          <h1 className="color-font">{selectedWork.title}</h1>
        </div>

        <div className="col-md-7">
          <div className={`dull-image ${selectedWork?.isFilter || ""}`}>
            <Image
              src={selectedWork.image}
              alt="Work"
              width={800}
              height={800}
              className="img-fluid rounded"
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div className="col-md-5">
          <p className="d-block d-md-none mt-3">
            {selectedWork?.details?.mobile}
          </p>
          <div className="d-none d-md-block">
            <p>{selectedWork?.details?.description}</p>
            <p>{selectedWork?.details?.description2}</p>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="my-5">
        <div className="card shadow-sm border-0 mb-5" ref={expertiseRef}>
          <div className="card-header color-font text-white text-center py-3">
            <h2 className="h4 text-uppercase fw-bold mb-0">
              Our Expertise Includes
            </h2>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              {selectedWork.details.expertiseIncludes.map(
                (item: string, index: number) => (
                  <li
                    key={index}
                    className="list-group-item d-flex align-items-center border-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      viewBox="0 0 122.88 109.76"
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          fill={theme === "dark" ? "#ffffff" : "#000000"}
                          d="M0,52.88l22.68-0.3c8.76,5.05,16.6,11.59,23.35,19.86C63.49,43.49,83.55,19.77,105.6,0h17.28 
                      C92.05,34.25,66.89,70.92,46.77,109.76C36.01,86.69,20.96,67.27,0,52.88L0,52.88z"
                        />
                      </g>
                    </svg>
                    <span className="fs-6 ml-3">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="card shadow-sm border-0"  ref={benefitsRef}>
          <div className="card-header color-font text-white text-center py-3">
            <h2 className="h4 text-uppercase fw-bold mb-0">Key Benefits</h2>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              {selectedWork.details.keyBenefits.map(
                (item: string, index: number) => (
                  <li
                    key={index}
                    className="list-group-item d-flex align-items-center border-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      viewBox="0 0 122.88 109.76"
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          fill={theme === "dark" ? "#ffffff" : "#000000"}
                          d="M0,52.88l22.68-0.3c8.76,5.05,16.6,11.59,23.35,19.86C63.49,43.49,83.55,19.77,105.6,0h17.28 
                      C92.05,34.25,66.89,70.92,46.77,109.76C36.01,86.69,20.96,67.27,0,52.88L0,52.88z"
                        />
                      </g>
                    </svg>
                    <span className="fs-6 ml-3">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleSectionService;
