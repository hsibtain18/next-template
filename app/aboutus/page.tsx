import React from "react";
import PagesHeader from "../components/PageHeader";
import AboutInfoSection from "../components/AboutIntro";
import WhyEctoriousSection from "../components/WhyEctoriousSection";
import SubHeaderFeature from "../components/SubHeaderFeature";
import ClientTestimonials from "../components/TestimonialVideo";
import ClientsSection from "../components/ClientsData";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <section className="flex flex-col gap-10 ">
      <PagesHeader imageLink="/about.webp">
        Our dedicated team of ECTORIOUS is bursting with talent, experience and
        passion for what we do
      </PagesHeader>
      <AboutInfoSection />
      <WhyEctoriousSection />
      <SubHeaderFeature />
      <ClientTestimonials />
      <ClientsSection />
      <div className="flex flex-col gap-0">
        <CallToAction />
        <Footer />
      </div>
    </section>
  );
};

export default AboutUs;
