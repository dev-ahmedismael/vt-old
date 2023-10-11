import React from "react";
import CenteredSection from "@/templates/CenteredSection";

const Tech = () => {
  const section = {
    title: "Management of the Information Technology Center",
    description:
      "In today's world of ever-accelerating technologies, managing an information technology (IT) center has become critical to businesses and organizations of all sizes. The IT center is responsible for providing the infrastructure, applications and technical support that employees and customers need to get their work done.",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Tech;
