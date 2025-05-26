import Footer from "@/app/components/Footer";
import MiddleSectionService from "@/app/components/MiddleSectionService";
import WorksHeader from "@/app/components/WorkHeader";
import { notFound } from "next/navigation";
import React from "react";

const validServices = ["aam", "ppc", "bm", "testimonials"];

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
      <div className="main-content">
        <MiddleSectionService url={service} />
        <Footer />
      </div>
    </section>
  );
};

export default ServicePage;
