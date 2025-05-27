'use client'
import React from "react";
import Footer from "../components/Footer";
import CalendlyWidget from "../components/Calendly";
import { useTheme } from "next-themes";

const Calender = () => {
    const { theme, setTheme} = useTheme()
    console.log(theme);
    
    setTheme('dark')
  return (
    <div className="main-content flex flex-col gap-20 pt-5">
      <CalendlyWidget />
      <Footer />
    </div>
  );
};

export default Calender;
