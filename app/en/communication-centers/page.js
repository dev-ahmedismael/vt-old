import Com from "@/components/en/communication-centers/Com";
import ComThree from "@/components/en/communication-centers/ComThree";
import ComTwo from "@/components/en/communication-centers/ComTwo";
import Interested from "@/components/en/interested/Interested";
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
