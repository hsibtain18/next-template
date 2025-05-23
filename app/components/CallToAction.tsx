import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section
      className="call-action section-padding sub-bg bg-img"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <h6 className="wow words chars splitting" data-splitting>
                Let’s Talk
              </h6>
              <h2 className="wow words chars splitting" data-splitting>
                about your <br />
                <b className="back-color">next project</b>.
              </h2>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 valign">
            <Link href={""} className="butn bord curve wow fadeInUp">
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
