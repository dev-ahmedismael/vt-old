import React from "react";
import RtlSection from "@/templates/RtlSection";

const IOTThree = () => {
  const section = {
    description:
      "Development of IoT devices: This research focuses on the development of IoT devices that are more .efficient, cost-effective, and environmentally friendly. Development of IoT protocols: This research focuses on the development of IoT protocols that allow devices to communicate with each other and exchange data efficiently. Development of IoT applications: This research focuses on the development of IoT applications that can improve our lives in many areas.",
    imgUrl: "/images/iot.png",
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

export default IOTThree;
