import AR from "@/components/ar/ar/AR";
import ARThree from "@/components/ar/ar/ARThree";
import ARTwo from "@/components/ar/ar/ARTwo";
import Interested from "@/components/ar/interested/Interested";
import React from "react";

const page = () => {
  return (
    <main>
      <AR />
      <ARTwo />
      <ARThree />
      <Interested />
    </main>
  );
};

export default page;
