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
    <div className="d-flex justify-content-center align-items-center vh-100 mt-50">
      <div
        className="calendly-inline-widget w-100"
        data-url="https://calendly.com/ectorious/30min?hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};
export default CalendlyWidget