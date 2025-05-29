export default function AboutInfoSection() {
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
              <div className="text">
                <p
                  className="wow txt mb-10 words chars splitting"
                   
                >
                  {aboutInfo.paragraph1}
                </p>
                <p className="wow txt words chars splitting"  >
                  {aboutInfo.paragraph2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }