import Com from "@/components/ar/communication-centers/Com";
import ComThree from "@/components/ar/communication-centers/ComThree";
import ComTwo from "@/components/ar/communication-centers/ComTwo";
import Interested from "@/components/ar/interested/Interested";
import React from "react";

const page = () => {
  return (
    <main>
      <Com />
      <ComTwo />
      <ComThree />
      <Interested />
    </main>
  );
};

export default page;
