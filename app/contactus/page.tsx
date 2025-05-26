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
        <CallToAction />
        <Footer/>
      </div>
    </section>
  );
};

export default ContactUs;
