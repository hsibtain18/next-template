import AboutUs from "./components/Aboutus"; 
import LandingSwiper from "./components/LandingSwiper";
import ParticlesComponent from "./components/Particles";
import SubHeaderFeature from "./components/SubHeaderFeature";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-poppins)]">
    {/* Landing Section */}
    <section className="relative h-screen overflow-hidden">
      {/* Particles + Gradient */}
      <ParticlesComponent />
      
      {/* Foreground Swiper Content */}
      <LandingSwiper />
    </section>
  
    {/* Scrollable Section Below */}
    <section  >
      <AboutUs/>
      <SubHeaderFeature />
    </section>
  </div>
  );
}
