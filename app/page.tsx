'use client'
import AboutUs from "./components/Aboutus";
import CallToAction from "./components/CallToAction";
import ClientsSection from "./components/ClientsData";
import FunFacts from "./components/FunFacts";
import LandingSwiper from "./components/LandingSwiper";
import ParticlesComponent from "./components/Particles";
import SubHeaderFeature from "./components/SubHeaderFeature";
import TestimonialCarousel from "./components/TestimonialCarousel";
import TestimonialSub from "./components/TestimonialSub";
import ClientTestimonials from "./components/TestimonialVideo";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-poppins)]">
      {/* Landing Section */}
      <section className="relative overflow-hidden">
        {/* Particles + Gradient */}
        <ParticlesComponent />

        {/* Foreground Swiper Content */}
        <LandingSwiper />
      </section>

      {/* Scrollable Section Below */}
      <section className="flex flex-col gap-10">
        <AboutUs />
        <SubHeaderFeature />
        <TestimonialSub />
        <TestimonialCarousel />
        <FunFacts />
        <ClientTestimonials />
        <ClientsSection />
        <CallToAction/>
      </section>
    </div>
  );
}
