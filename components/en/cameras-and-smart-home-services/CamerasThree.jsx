import RtlSection from "@/templates/RtlSection";
import React from "react";

const CamerasThree = () => {
  const section = {
    description:
      "Our smart home solutions extend beyond surveillance, offering a comprehensive suite of automation and control options. From remotely managing lighting and thermostats to optimizing energy consumption, Vision Things transforms your living spaces into intelligent, responsive environments. Our experienced technicians specialize in maintaining and servicing a wide range of camera systems, ensuring that they remain functional and effective over time. Whether it's routine check-ups, troubleshooting, or updates, our team is dedicated to keeping your surveillance infrastructure running smoothly.",
    imgUrl: "/images/connect.png",
    hasBtn: false,
  };
  return (
    <RtlSection
      title={section.title}
      description={section.description}
      imgUrl={section.imgUrl}
      hasBtn={section.hasBtn}
      btnUrl={section.btnUrl}
      btnContent={section.btnContent}
    />
  );
};

export default CamerasThree;
