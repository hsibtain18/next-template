'use client'
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import CalendlyWidget from "../components/Calendly";
import { useTheme } from "next-themes";

const Calender = () => {
    const { theme, setTheme} = useTheme()
    debugger
    useEffect(()=>{
      setTheme('light')
      console.log(theme);

    })
  return (
    <div className="main-content flex flex-col gap-20 pt-5">
      <CalendlyWidget />
      <Footer />
    </div>
  );
};

export default Calender;
