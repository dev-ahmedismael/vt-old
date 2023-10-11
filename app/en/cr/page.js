import CR from "@/components/en/cr/CR";
import CRResearch from "@/components/en/cr/CRResearch";
import CRTwo from "@/components/en/cr/CRTwo";
import Interested from "@/components/en/interested/Interested";
import React from "react";

const page = () => {
  return (
    <main>
      <CR />
      <CRTwo />
      <CRResearch />
      <Interested />
    </main>
  );
};

export default page;
