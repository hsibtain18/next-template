'use client'
import React  from 'react';
import Image from 'next/image'; 
import { useTheme } from 'next-themes';
import { clientsData } from '../common/Constant';

const ClientsSection = () => {
  const { theme } = useTheme();

  const firstHalf = clientsData.slice(0, clientsData.length / 2);
  const secondHalf = clientsData.slice(4);
 

  return (
    <section className="clients section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign md-mb50">
            <div className="sec-head mb-0">
              <h6 className="wow fadeIn" data-wow-delay=".3s">Best Features</h6>
              <h3 className="wow mb-20 color-font">Our Clients</h3>
              <p>
                Ectorious stands as the preferred partner for industry leaders, driven by trust, excellence, and a
                powerful network of successful collaborators.
              </p>
            </div>
          </div>

          <div className="col-lg-8">
            <div>
              <div className="row bord">
                {firstHalf.map((item) => (
                  <div className="col-md-3 col-6 brands" key={item.id}>
                    <div className="item wow fadeIn"  >
                      <div className="img">
                        <div className="svgContainer">
                          <Image
                            src={theme === 'light' ? item.lightImage : item.darkImage}
                            alt="client image"
                            width={100}
                            height={50}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row">
                {secondHalf.map((item) => (
                  <div
                    key={item.id}
                    className={`col-md-3 col-6 brands ${[5, 6].includes(item.id) ? 'sm-mb30' : ''}`}
                  >
                    <div className="item wow fadeIn"  >
                      <div className="img">
                        <div className="svgContainer">
                          <Image
                            src={theme === 'light' ? item.lightImage : item.darkImage}
                            alt="client image"
                            width={100}
                            height={50}
                            loading="lazy"
                          />
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
    </section>
  );
};

export default ClientsSection;
