import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const Robots = () => {
  const section = {
    title: "Robots",
    description:
      "Robots are machines that can perform tasks automatically. They are used in a variety of applications, including manufacturing, healthcare, scientific research, and defense. Robots are a promising technology with great potential. By conducting more research in this field, we can develop robots that can improve our lives in many ways.",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Robots;
