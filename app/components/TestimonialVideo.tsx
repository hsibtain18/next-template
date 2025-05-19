"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ClientTestimonials = () => {
  const [videoIsOpen, setVideoIsOpen] = useState(false);

  const intro1Data = [
    {
      id: "1",
      path: "/video/sample.mp4",
      name: "Santoshi",
      avatar: "/video-icon.jpg",
      company: "Australia",
      position: "Co-founder",
    },
  ];

  const toggleVideo = () => {
    setVideoIsOpen(!videoIsOpen);
  };
  useEffect(() => {
    toggleVideo();
  }, []);

  return (
    <section className="block-sec VideoTestimonial">
      <div
        className="background bg-img pt-100 pb-0 parallaxie"
        style={{ backgroundImage: `url('/bg-vid.webp')` }}
        data-overlay-dark="5"
      >
        {/* <div className="absolute inset-0 bg-black/50 z-0"></div> */}
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".3s">
                    Our Clients
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".3s">
                    What Client&apos;s Say?
                  </h4>
                </div>
                <div className="slic-item wow fadeInUp" data-wow-delay=".3s">
                  {intro1Data.map((item) => (
                    <div key={item.id} className="item">
                      <div className="videoContainer">
                        <video controls muted loop preload="metadata">
                          <source src={item.path} type="video/mp4" />
                        </video>
                      </div>
                      <div className="info">
                        <div className="img">
                          <div className="img-box">
                            <Image
                              src={item.avatar}
                              alt="Client avatar"
                              width={100}
                              height={100} 
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="cont">
                          <div className="author">
                            <h6 className="author-name">{item.name}</h6>
                            <span className="author-details">
                              {item.position}, {item.company}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
