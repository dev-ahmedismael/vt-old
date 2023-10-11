import CR from "@/components/ar/cr/CR";
import CRResearch from "@/components/ar/cr/CRResearch";
import CRTwo from "@/components/ar/cr/CRTwo";
import Interested from "@/components/ar/interested/Interested";
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
