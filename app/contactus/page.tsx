import React from "react";
import HeaderWithParticles from "../components/ContactHeader";
import ContactSection from "../components/ContactForm";
import CallToAction from "../components/CallToAction";
import ClientsSection from "../components/ClientsData";
import ClientTestimonials from "../components/TestimonialVideo";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <section>
      <HeaderWithParticles />
      <div className="main-content">
        <ContactSection />
        <ClientTestimonials />
        <ClientsSection /> 
        <div className="flex flex-col gap-0">
          <CallToAction />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
