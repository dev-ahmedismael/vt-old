import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const Cameras = () => {
  const section = {
    title: "Cameras and Smart homes",
    description:
      "Vision Things is a pioneering company in the realm of smart home solutions and surveillance technology. With a profound commitment to innovation, we specialize in delivering state-of-the-art CCTV cameras and cutting-edge smart home devices to enhance security and convenience.",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Cameras;
