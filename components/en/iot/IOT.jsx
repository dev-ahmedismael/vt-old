import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const IOT = () => {
  const section = {
    title: "Internet of Things (IoT)",
    description:
      "The Internet of Things (IoT) is a concept that refers to the connection of devices, systems, and physical things to the internet, so that they can collect data, exchange it, and process it without human intervention. IoT is used in a variety of applications, including manufacturing, healthcare, transportation, energy, and smart homes.",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default IOT;
