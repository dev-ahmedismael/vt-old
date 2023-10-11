import LtrSection from "@/templates/LtrSection";
import React from "react";

const AITwo = () => {
  const section = {
    description:
      "AI has the potential to revolutionize many fields, including healthcare, manufacturing, finance, transportation, and education. AI can help us solve some of world's most pressing challenges, such as climate change, disease, and poverty. AI has the potential to revolutionize many fields, but there are also some concerns about the potential impacts of AI. For example, there are concerns that AI could lead to job losses, and that it could be used for harmful purposes, such as the development of autonomous weapons. It is important to remember that AI is a tool, and it can be used for good or evil. It is our responsibility to ensure that AI is used in a responsible and ethical way. ",
    imgUrl: "/images/ai.png",
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

export default AITwo;
