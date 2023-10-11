import React from "react";
import LtrSection from "@/templates/LtrSection";

const BusinessSix = () => {
  const section = {
    description:
      "In this step, the system is tested before it is delivered to the customer, where all possible features are tested and the work results and reports are confirmed and their impact on the rest of the system. This is done in general for the entire system and specifically for each model or service in itself.",
    imgUrl: "/images/system_test.png",
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

export default BusinessSix;
