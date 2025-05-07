import Counter from "./components/Counter";
import LandingSwiper from "./components/LandingSwiper";
import ParticlesComponent from "./components/Particles";

export default function Home() {
  return (
    <div className=" container grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
      <ParticlesComponent />
      <div className="mt-40 min-h-screen container z-30 ml-auto">

      <LandingSwiper />
      </div>
      <Counter/>
    </div>
  );
}
