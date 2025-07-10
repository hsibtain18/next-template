'use client'
import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="d-flex justify-content-center  align-items-center vh-100  calendly">
      <div
        className="calendly-inline-widget w-100  md:mt-5"
        data-url="https://calendly.com/ectorious/30min?hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: "880px" ,overflowY:'hidden' }}
      ></div>
    </div>
  );
};
export default CalendlyWidget