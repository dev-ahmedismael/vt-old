import LtrSection from "@/templates/LtrSection";
import React from "react";

const CRTwo = () => {
  const section = {
    description:
      "Computer vision relies on the processing of images and video. This is done by converting images to digital data, and then applying computer vision algorithms to this data to identify objects and events in the image. Computer vision relies on the processing of images and video. This is done by converting images to digital data, and then applying computer vision algorithms to this data to identify objects and events in the image.",
    imgUrl: "/images/about_eye.png",
    hasBtn: false,
  };
  return (
    <LtrSection
      description={section.description}
      imgUrl={section.imgUrl}
      hasBtn={false}
    />
  );
};

export default CRTwo;
