import React from "react";
import Footer from "../components/Footer";
import CalendlyWidget from "../components/Calendly";

const Calender = () => {
  return (
    <div className="main-content">
      <CalendlyWidget />
      <Footer />
    </div>
  );
};

export default Calender;
