import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const CR = () => {
  const section = {
    title: "Computer Vision",
    description:
      "Computer vision (CV) is a field of artificial intelligence (AI) that deals with the processing of visual information from the real world and the creation of models of the physical world. Computer vision can be used to create a variety of applications, such as facial recognition, object recognition, and motion tracking.",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default CR;
