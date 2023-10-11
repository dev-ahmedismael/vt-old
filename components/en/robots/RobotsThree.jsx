import RtlSection from "@/templates/RtlSection";
import React from "react";

const RobotsThree = () => {
  const section = {
    description:
      "Robots are machines that can perform tasks automatically. They are used in a variety of applications, including manufacturing, healthcare, scientific research, and defense. Robots are a promising technology with great potential. By conducting more research in this field, we can develop robots that can improve our lives in many ways. Despite these challenges, robotics is a rapidly evolving field. With more research, we can develop robots that can improve our lives in many areas.",
    imgUrl: "/images/robot.png",
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

export default RobotsThree;
