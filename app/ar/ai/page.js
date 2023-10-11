import AI from "@/components/ar/ai/AI";
import AIResearch from "@/components/ar/ai/AIResearch";
import AITwo from "@/components/ar/ai/AITwo";
import Interested from "@/components/ar/interested/Interested";
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
