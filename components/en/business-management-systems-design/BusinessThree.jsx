import React from "react";
import RtlSection from "@/templates/RtlSection";

const BusinessThree = () => {
  const section = {
    description:
      "Designing business systems is an ongoing process. As the business evolves, the system will need to change and evolve to stay current. It is important for companies to be ready for change and development, and to have a team of qualified professionals to manage the business systems design process.",
    imgUrl: "/images/ui.png",
    hasBtn: false,
  };
  return (
    <RtlSection
      title={section.title}
      description={section.description}
      imgUrl={section.imgUrl}
      hasBtn={section.hasBtn}
    />
  );
};

export default BusinessThree;
