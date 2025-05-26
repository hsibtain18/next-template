"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
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

  const details = [
    {
      id: "aam",
      image: "/services/aam.webp",
      title: "Amazon Account Management",
      isFilter: "aam",

      details: {
        description:
          "Managing an Amazon account can be complex and time-consuming, but with our hands-on account management solutions, we make the process seamless and stress-free. We take the burden off your shoulders, handling everything from inventory management to troubleshooting, so you can focus on growing your business. Our team works tirelessly to ensure that your account is not only healthy but also fully compliant with Amazon’s ever-evolving policies, helping you avoid penalties and disruptions.",
        description2:
          "We also prioritize optimization, ensuring that your account is set up for long-term success. Whether it’s fine-tuning product listings for maximum visibility, analyzing sales data for growth opportunities, or resolving any issues with Amazon's platform quickly and efficiently, we’ve got you covered. Our approach is tailored to your unique business needs, ensuring your Amazon operations run smoothly and are always on track for continued success.",
        mobile:
          "Experience effortless Amazon operations with our hands-on account management solutions. We ensure your account remains healthy, compliant, and optimized for success.",

        expertiseIncludes: [
          "Strategic inventory and fulfillment planning.",
          "Comprehensive account audits to identify growth opportunities.",
          "Resolving account issues with precision and care.",
        ],
        keyBenefits: [
          "Enhanced account health metrics for sustained performance.",
          "Reduced operational complexities and smoother workflows.",
          "Actionable insights to maximize revenue streams.",
        ],
      },
    },
    {
      id: "ppc",
      title: "PPC Management",
      image: "/services/ppc.webp",
      isFilter: "ppc",

      details: {
        description:
          "Mastering the art of Amazon advertising is essential for standing out in a competitive marketplace, and our PPC services are designed to help you do just that. We combine advanced, data-driven analytics with innovative and creative strategies to create targeted advertising campaigns that drive results. Our approach goes beyond just placing ads – we carefully analyze market trends, customer behavior, and competitor activity to ensure that your ads reach the right audience at the right time.",
        description2:
          "By utilizing Amazon's robust advertising tools and features, we craft tailored campaigns that maximize visibility and conversion potential. Whether you're aiming to boost product sales, increase brand awareness, or drive traffic to your listings, our strategies are designed to ensure you get the highest return on investment. Our team continuously monitors and optimizes your campaigns to maintain a competitive edge, ensuring you outshine your competitors and achieve sustained growth in your Amazon business.",
        mobile:
          "Master the art of Amazon advertising with our PPC services. We blend cutting-edge analytics with creative strategies to help you outshine competitors.",
        expertiseIncludes: [
          "Advanced campaign setup, segmentation, and optimization.",
          "In-depth analysis to identify high-performing keywords.",
          "Regular performance reporting with actionable recommendations.",
        ],
        keyBenefits: [
          "Higher ROI with reduced ACOS.",
          "Improved ad visibility and click-through rates.",
          "Long-term profitability through continuous campaign refinement.",
        ],
      },
    },
    {
      id: "bm",
      image: "/services/bm.webp",
      title: "Brand Management",
      isFilter: "brand",
      details: {
        description:
          "Your brand is more than just a logo or a name; it represents the core of your business, your values, and your promise to your customers. It’s the emotional connection that drives trust, loyalty, and recognition. A strong brand isn’t simply about standing out in the marketplace; it’s about creating an identity that resonates deeply with your target audience and aligns with their needs, desires, and expectations.",
        description2:
          "We specialize in crafting and nurturing that connection, ensuring that your brand stands as a beacon of quality and consistency. By focusing on both the visual and emotional elements, we help you create a compelling presence that not only attracts attention but also builds trust and encourages customer conversion. From strategic messaging to creative design, we focus on every aspect to ensure that your brand is not only seen but also remembered and valued by your customers.",
        mobile:
          "Your brand is more than a logo; it’s a promise to your customers. We’ll help you create a compelling presence that captivates and converts.",
        expertiseIncludes: [
          "Custom A+ Content and Storefront creation.",
          "Strategic branding aligned with your business goals.",
          "Ongoing monitoring to ensure brand consistency and growth.",
        ],
        keyBenefits: [
          "Elevated brand credibility and customer trust.",
          "Increased conversion rates through optimized content.",
          "Streamlined processes for sustainable branding success.",
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

  return (
    <section className="container py-5 service">
      {/* Top Section */}
      <div className="row align-items-center mb-5">
        <div className="col-12 justify-content-center mb-5 text-center">
          <h1 className="color-font">{selectedWork.title}</h1>
        </div>

        <div className="col-md-7">
        <div className={`dull-image ${selectedWork?.isFilter || ''}`}>
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
        <div className="card shadow-sm border-0 mb-5">
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
                      width="15px"
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
                    <span className="fs-6 ms-3">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="card shadow-sm border-0">
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
                      width="15px"
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
