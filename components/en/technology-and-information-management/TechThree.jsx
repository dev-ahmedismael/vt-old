import React from "react";
import RtlSection from "@/templates/RtlSection";

const TechThree = () => {
  const section = {
    description:
      "Monitor, update and manage security patches to optimize your network, servers, computers and other technical devices of all kinds. Preserving data from user errors. Keep your business systems and data secure with real-time monitoring, business continuity, and disaster recovery solutions. Fill gaps and expand your technology expertise with tech support tailored to your specific business needs. Let us help you find the right internet provider and manage your network perfectly.",
    imgUrl: "/images/it_mangement.png",
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

export default TechThree;
