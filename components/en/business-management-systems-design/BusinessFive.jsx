import React from "react";
import RtlSection from "@/templates/RtlSection";

const BusinessFive = () => {
  const section = {
    description:
      "The programming and design team will start work on the system and implement the system according to the interfaces that have been agreed upon and the requirements required by the entity implementing the system. The team will use any programming languages that fit those requirements and build databases that will help the system work in the future. The work team will also develop the necessary security and firewall systems to protect the system from intrusions and ensure the integrity of the system and the database.",
    imgUrl: "/images/development.png",
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

export default BusinessFive;
