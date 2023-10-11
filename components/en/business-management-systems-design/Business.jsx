import React from "react";
import CenteredSection from "@/templates/CenteredSection";

const Business = () => {
  const section = {
    title: "Business management systems design",
    description:
      "Designing business systems that help establishments to perform their business, whether they are programs on the Internet, mobile applications, programs on the company's internal network, or ERP Business systems design is the process of creating an integrated information system that meets business needs. This includes defining business requirements, designing the system, developing the system, testing the system, and deploying the system.",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Business;
