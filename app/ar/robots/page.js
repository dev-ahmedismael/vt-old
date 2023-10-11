import Interested from "@/components/ar/interested/Interested";
import Robots from "@/components/ar/robots/Robots";
import RobotsFour from "@/components/ar/robots/RobotsFour";
import RobotsThree from "@/components/ar/robots/RobotsThree";
import RobotsTwo from "@/components/ar/robots/RobotsTwo";
import React from "react";

const page = () => {
  return (
    <main>
      <Robots />
      <RobotsTwo />
      <RobotsThree />
      <RobotsFour />
      <Interested />
    </main>
  );
};

export default page;
