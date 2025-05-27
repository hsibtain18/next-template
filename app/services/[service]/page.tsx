import CallToAction from "@/app/components/CallToAction";
import ClientsSection from "@/app/components/ClientsData";
import Footer from "@/app/components/Footer";
import MiddleSectionService from "@/app/components/MiddleSectionService";
import ClientTestimonials from "@/app/components/TestimonialVideo";
import WorksHeader from "@/app/components/WorkHeader";
import { notFound } from "next/navigation";
import React from "react";

const validServices = ["aam", "ppc", "bm", "testimonials"];
export async function generateStaticParams() {
    return ["aam", "ppc", "bm", "testimonials"].map((service) => ({
      service,
    }));
  }
const ServicePage = async ({
  params,
}: {
  params: Promise<{ service: string }>;
}) => {
  const { service } = await params;

  if (!validServices.includes(service)) {
    notFound();
  }

  return (
    <section>
      <WorksHeader url={service} />
      <div className="main-content flex flex-col gap-20 pt-5">
        <MiddleSectionService url={service} />
        <ClientTestimonials />
        <ClientsSection />
        <div className="flex flex-col gap-0">
          <CallToAction />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
