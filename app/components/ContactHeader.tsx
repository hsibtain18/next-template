 
import ParticlesComponent from "./Particles";

export default function HeaderWithParticles() { 
  const contentHeaderData = {
    "id": 1,
    "title": { "first": "Let's talk", "second": "about your project." },
    "content": "Feel free to ask me any question or let’s do to talk about our future collaboration."
  }
  

  

  return (
    <header className="pages-header circle-bg valign position-re relative overflow-hidden">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-9 col-md-11">
            <div className="capt text-center">
              <h1 className="color-font mb-10 font-bold">
                {contentHeaderData.title.first} <br />
                {contentHeaderData.title.second}
              </h1>
              <p>{contentHeaderData.content}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-color particles-overlay">
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      </div>

      <ParticlesComponent
        
      />
    </header>
  );
}
