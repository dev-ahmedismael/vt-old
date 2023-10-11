import Interested from "@/components/ar/interested/Interested";
import IOT from "@/components/ar/iot/IOT";
import IOTThree from "@/components/ar/iot/IOTThree";
import IOTTwo from "@/components/ar/iot/IOTTwo";
import React from "react";

const page = () => {
  return (
    <main>
      <IOT />
      <IOTTwo />
      <IOTThree />
      <Interested />
    </main>
  );
};

export default page;
