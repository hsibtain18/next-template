import React from "react";

const AboutUs = () => {
  const aboutData = {
    id: 1,
    smallTitle: "About Us",
    title: "Our Comapny",
    content:
      "At Ectorious, we’re driven by a single mission: to unlock the full potential of your brand on Amazon. We specialize in elevating Amazon stores through expert PPC Management, Brand Management, and Account Optimization, delivering measurable results that boost sales, visibility, and profitability.",
    image: "/img/homeAbout.webp",
    status: [
      { id: 1, number: "72", letter: "+", statusName: "Happy Clients" },
      { id: 2, number: "90", letter: "+", statusName: "Success Projects" },
    ],
  };
  return (
    <section className="flex row-auto">
      <div className="w-1/2">
        <div className="mb-50">
          <h6 className="fw-100 text-u ls10 mb-10">{aboutData.smallTitle}</h6>
          <h3 className="fw-600 text-u ls1 mb-30 color-font">
            {aboutData.title}
          </h3>
          <p>{aboutData.content}</p>
          {/* <!-- <NuxtLink to="#" className="butn bord curve mt-30">
              <span>Read More</span>
            </NuxtLink> -->
            <NuxtLink :to="aboutRoute" className="butn bord curve mt-30"><span>Read More</span></NuxtLink> */}
        </div>
      </div>
      <div className="w-1/2">
        <div className=" dull-image">
          {/* <NuxtImg format="webp" :src="aboutData.image" :alt="aboutData.title"
              sizes="(max-width: 640px) 320px, 1024px" lazy native /> */}
        </div>
        <div className="stauts">
          {aboutData.status.map((statue) => (
            <div className="item" key={statue.id}>
              <h4>
                {statue.number}
                <span>{statue.letter}</span>
              </h4>
              <h6>{statue.statusName}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
