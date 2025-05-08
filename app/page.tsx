import Counter from "./components/Counter";
import LandingSwiper from "./components/LandingSwiper";
import ParticlesComponent from "./components/Particles";

export default function Home() {
  return (
    <div className="pt-20 font-[family-name:var(--font-poppins)]">
    {/* Landing Section */}
    <section className="relative h-screen overflow-hidden">
      {/* Particles + Gradient */}
      <ParticlesComponent />
      
      {/* Foreground Swiper Content */}
      <LandingSwiper />
    </section>
  
    {/* Scrollable Section Below */}
    <section className="p-8 sm:p-20">
      <Counter />
    </section>
  </div>
  );
}
