import React from "react";
import LtrSection from "@/templates/LtrSection";

const BusinessFour = () => {
  const section = {
    description:
      "These are considered the most important steps of the work, as several meetings are arranged between the Vision of Things Information Technology Company and the entity that implements the system in order to explain all the requirements and the workflow method in every detail and to specify the methods of communication between the two parties.",
    imgUrl: "/images/business_systems.png",
    hasBtn: false,
  };
  return (
    <LtrSection
      title={section.title}
      description={section.description}
      imgUrl={section.imgUrl}
      hasBtn={section.hasBtn}
    />
  );
};

export default BusinessFour;
