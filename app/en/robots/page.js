import Interested from "@/components/en/interested/Interested";
import Robots from "@/components/en/robots/Robots";
import RobotsFour from "@/components/en/robots/RobotsFour";
import RobotsThree from "@/components/en/robots/RobotsThree";
import RobotsTwo from "@/components/en/robots/RobotsTwo";
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
