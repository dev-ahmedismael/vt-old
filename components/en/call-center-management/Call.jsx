import React from "react";
import CenteredSection from "@/templates/CenteredSection";

const Call = () => {
  const section = {
    title: "IP Phone | Call Center Management",
    description:
      "A call center system is a useful business asset for all organizations facing a high volume of calls, which is essential in today's competitive business environment. It can help your business provide better customer service, stay responsive to customer inquiries, and increase accessibility.",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Call;
