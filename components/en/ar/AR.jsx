import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const AR = () => {
  const section = {
    title: "Augmented reality AR",
    description:
      "Augmented reality (AR) is a technology that superimposes a computer-generated image on a user's view of the real world, thus providing a composite view. AR can be used in a variety of applications, including education, industry, gaming, and entertainment.",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default AR;
