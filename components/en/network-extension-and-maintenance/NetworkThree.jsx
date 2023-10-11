import React from "react";
import RtlSection from "@/templates/RtlSection";

const NetworkThree = () => {
  const section = {
    description:
      "If you are looking for a company that specializes in extending and maintaining networks, it is important to choose to see Vision Things that have experience in the field of networks and provide high-quality services.",
    imgUrl: "/images/wireless.png",
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

export default NetworkThree;
