import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const AI = () => {
  const section = {
    title: "Artificial Intelligence AI",
    description:
      "Artificial intelligence (AI) is a field of computer science that deals with the creation of intelligent ents, which are systems that can reason, learn, and act autonomously. AI includes a wide range of techniques, including machine learning, deep learning, natural language processing, and computer vision. ",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default AI;
