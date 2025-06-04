'use client'
import { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin,SplitText);


export default function AboutInfoSection() {
      const textRef = useRef<HTMLDivElement>(null);
      const textRef2 = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const animateText = async () => {
          if (!textRef.current) return;
          const { default: SplitText } = await import('gsap/SplitText');
          gsap.registerPlugin(SplitText, ScrollTrigger);
          const split = new SplitText(textRef.current, {
            type: 'chars',
          });
          gsap.from(split.chars, {
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
              once: true,
            },
            opacity: 0,
            y: 20,
            stagger: 0.03,
            duration: 0.2,
            ease: 'power2.out',
          });
          const split2 = new SplitText(textRef2.current, {
            type: 'chars',
          });
          gsap.from(split2.chars, {
            scrollTrigger: {
              trigger: textRef2.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
              once: true,
            },
            opacity: 0,
            y: 20,
            stagger: 0.03,
            duration: 0.2,
            ease: 'power2.out',
          });
        };
    
        animateText();
      }, []);
    const aboutInfo = {
        "id": 1,
        "title": "Who We Are ?",
        "paragraph1": "We are a team of passionate Amazon specialists, strategists, and creatives committed to one goal—Your Amazon Success. From our seasoned PPC experts who transform ad campaigns into profitable ventures to our meticulous brand managers who ensure your brand stands out, each member of our team brings a unique skillset to the table.",
        "paragraph2": "Our team is built on a foundation of expertise and dedication, combining cutting-edge technology and data-driven insights to empower brands to thrive in the ever-evolving Amazon marketplace."
      }
      
    return (
      <section className="intro-section  ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="htit sm-mb30">
                <h4>{aboutInfo.title}</h4>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-1 col-md-8">
              <div className="text" >
                <p
                  className="wow txt mb-10 words chars splitting"
                    ref={textRef}
                >
                  {aboutInfo.paragraph1}
                </p>
                <p className="wow txt words chars splitting"   ref={textRef2} >
                  {aboutInfo.paragraph2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }