import Counter from "./components/Counter";
import LandingSwiper from "./components/LandingSwiper";
import ParticlesComponent from "./components/Particles";

export default function Home() {
  return (
    <div className="   p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
      {/* Landing Section */}
      <section className="relative h-screen p-8 sm:p-20 overflow-hidden">
        {/* Scoped Particles */}
        <div className="relative top-0 left-0 w-full h-screen -z-10">
          <ParticlesComponent />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <LandingSwiper />
        </div>
      </section>

      {/* Counter Section - will appear after scroll */}
      <section className="p-8 sm:p-20">
        <Counter />
      </section>
    </div>
  );
}
