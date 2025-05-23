import React from "react";
import WorksHeader from "../components/WorkHeader";
import TestimonialsSection from "../components/TestimonialSection";
import CallToAction from "../components/CallToAction";
import ClientsSection from "../components/ClientsData";
import ClientTestimonials from "../components/TestimonialVideo";

const Testimonial = () => {
  return (
    <section>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <WorksHeader />
      <div className="main-content flex flex-col gap-10">
        <TestimonialsSection />
        <ClientTestimonials />
        <ClientsSection />
        <CallToAction />
      </div>
    </section>
  );
};

export default Testimonial;
