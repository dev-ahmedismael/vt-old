import AI from "@/components/en/ai/AI";
import AIResearch from "@/components/en/ai/AIResearch";
import AITwo from "@/components/en/ai/AITwo";
import Interested from "@/components/en/interested/Interested";
import React from "react";

const page = () => {
  return (
    <main>
      <AI />
      <AITwo />
      <AIResearch />
      <Interested />
    </main>
  );
};

export default page;
