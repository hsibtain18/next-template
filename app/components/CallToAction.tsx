"use client";
import Link from "next/link";
import React  from "react"; 
import SplittingText from "./SplittingWraper";
const CallToAction = () => {
 
  return (
    <section className="call-action section-padding   bg-img">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <SplittingText>
                <h6 className="wow words chars splitting">Let’s Talk</h6>
              </SplittingText>
           
              <SplittingText>
              <h2 className="wow words chars splitting"  >
                about your <br />
                <b className="back-color">next project</b>.
              </h2>
              </SplittingText>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 valign">
            <Link href={"/contactus"} className="butn bord curve wow fadeInUp">
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
